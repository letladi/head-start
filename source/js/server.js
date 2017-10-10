import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import bodyParser from 'body-parser'
import { Provider } from 'react-redux'
import transit from 'transit-immutable-js'

import passport from 'passport'

import 'babel-polyfill'

import configureStore from 'config/store'
import getServerHtml from 'config/server-html'

import Server from 'views/Server'
import routes from 'api/routes/'
import authRoutes from 'api/routes/auth'
import { HOST_NAME, PORT } from 'constants/urls'

import authCheckMiddleware from 'api/middleware/auth-check'
import loginStrategy from 'api/passport/local-login'
import SignupStrategy from 'api/passport/local-signup'

// Load SCSS
import '../scss/app.scss'

const app = express()

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize())
passport.use('local-signup', SignupStrategy)
passport.use('local-login', loginStrategy)

// allow cross-origin requests, since in development the browser and server have different ports
// TODO: allow this only in development
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use('/auth', authRoutes)

app.use('/client', express.static('build/client'))

app.use('/api', authCheckMiddleware)
app.use('/api', routes)

app.use((req, res) => {
  // Creates empty store for each request
  const store = configureStore()

  // Dehydrates the state
  const dehydratedState = JSON.stringify(transit.toJSON(store.getState()))
  // Context is passed to the StaticRouter and it will attach data to it directly
  const context = {}

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Server location={req.url} context={context} />
    </Provider>
  )

  const serverHtml = getServerHtml(appHtml, dehydratedState)

  // Context has url, which means `<Redirect>` was rendered somewhere
  if (context.url) {
    res.redirect(301, context.url)
  } else {
    // We're good, send the response
    res.status(context.status || 200).send(serverHtml)
  }

  // TODO how to handle 50x errors?
})

// Start listening
app.listen(PORT, (error) => {
  if (error) {
    console.error(error) // eslint-disable-line
  } else {
    console.info(`\n★★ Listening on port ${ PORT }. Open up http://${ HOST_NAME }:${ PORT }/ in your browser.\n`) // eslint-disable-line
  }
})
