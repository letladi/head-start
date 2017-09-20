import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { Provider } from 'react-redux';
import transit from 'transit-immutable-js';

import 'babel-polyfill';

import configureStore from 'config/store';
import getServerHtml from 'config/server-html';
import Server from 'views/Server';

// Load SCSS
import '../scss/app.scss';

const app = express();
const hostname = 'localhost';
const port = 8080;

app.use('/client', express.static('build/client'));

app.use((req, res) => {
  // Creates empty store for each request
  const store = configureStore();
  // Dehydrates the state
  const dehydratedState = JSON.stringify(transit.toJSON(store.getState()));

  // Context is passed to the StaticRouter and it will attach data to it directly
  const context = {};

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={ store }>
      <Server location={ req.url } context={ context } />
    </Provider>
  );

  const serverHtml = getServerHtml(appHtml, dehydratedState);

  // Context has url, which means `<Redirect>` was rendered somewhere
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // We're good, send the response
    res.status(context.status || 200).send(serverHtml);
  }

  // TODO how to handle 50x errors?
});

// Start listening
app.listen(port, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line
  } else {
    console.info(`\n★★ Listening on port ${ port }. Open up http://${ hostname }:${ port }/ in your browser.\n`); // eslint-disable-line
  }
});
