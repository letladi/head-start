import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import 'babel-polyfill'

import configureStore from 'config/store'
import Client from 'views/Client'

// Load SCSS
import '../scss/app.scss'

export const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

// Render app
render(Client)

if (module.hot) {
  module.hot.accept('./views/Client/', () => {
    const NewClient = require('./views/Client/index').default // eslint-disable-line global-require

    render(NewClient)
  })
}
