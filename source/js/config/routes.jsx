import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'views/HomePage'
import NotFound from 'views/NotFound'

const publicPath = '/'

export const routeCodes = {
  HOME: publicPath,
}

export default () => (
  <Switch>
    <Route path={routeCodes.HOME} component={HomePage} />
    <Route path='*' component={NotFound} />
  </Switch>
)
