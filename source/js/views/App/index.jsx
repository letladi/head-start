import React, { Component } from 'react'
import Routes from 'config/routes'
import SessionNotice from 'components/SessionNotice'

export default class App extends Component {
  render() {
    return (
      <div>
        <SessionNotice />
        <Routes />
      </div>
    )
  }
}

