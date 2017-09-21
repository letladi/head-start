import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'dev/logger'
import { isProduction } from 'constants/state'

// Remove if you are not using server rendering
// Also remove following packages from package.json
// "express"
// "transit-immutable-js"
// "transit-js"
// "nodemon"
// "concurrently"
import transit from 'transit-immutable-js'

import rootReducer from 'state/reducers'
import rootSaga from 'state/sagas'

// Remove if you are not using server rendering
let INIT_STATE = null

// Remove if you are not using server rendering
try {
  INIT_STATE = __DEHYDRATED_STATE // eslint-disable-line no-undef
} catch (e) {
  console.log('App: No dehydrated state') // eslint-disable-line no-console
}

// Remove if you are not using server rendering
if (INIT_STATE) {
  INIT_STATE = transit.fromJSON(INIT_STATE)
}

// create Saga middleware
const sagaMiddleware = createSagaMiddleware()

// Creating store
export default () => {
  let store = null
  let middleware = null

  if (isProduction) {
    // In production adding only thunk middleware
    middleware = applyMiddleware(sagaMiddleware)
  } else {
    // In development mode beside thunk
    // logger and DevTools are added
    middleware = applyMiddleware(sagaMiddleware, logger)

    // Enable DevTools if browser extension is installed
    if (!process.env.SERVER_RENDER && window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      )
    }
  }

  // Add dehydrated state if any
  if (INIT_STATE) {
    // Remove if you are not using server rendering
    store = createStore(
      rootReducer,
      INIT_STATE,
      middleware
    )
  } else {
    store = createStore(
      rootReducer,
      middleware
    )
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../state/reducers', () => {
      const nextRootReducer = require('../state/reducers/index').default // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }
  sagaMiddleware.run(rootSaga)
  return store
}
