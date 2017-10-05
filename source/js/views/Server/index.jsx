import React from 'react'
import PropTypes from 'prop-types'
import { StaticRouter } from 'react-router-dom'
import App from 'views/App'

const Server = ({ location, context }) => (
  <StaticRouter location={location} context={context}>
    <App />
  </StaticRouter>
)

Server.propTypes = {
  location: PropTypes.string,
  context: PropTypes.object,
}

export default Server
