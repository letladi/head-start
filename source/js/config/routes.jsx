import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFound from 'views/NotFound'

const publicPath = '/'

export const routeCodes = {
  HOME: publicPath,
}

export default () => (
  <Switch>
    <Route path='*' component={NotFound} />
  </Switch>
)
