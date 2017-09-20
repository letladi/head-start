import React, { Component } from 'react'
import Routes from 'config/routes'

export default class App extends Component {
  render() {
    return (
      <div className='ui grid'>
        <Routes />
      </div>
    )
  }
}
