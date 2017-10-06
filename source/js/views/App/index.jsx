import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Routes from 'config/routes'
import SessionNotice from 'components/SessionNotice'

export default class App extends Component {
  render() {
    return (
      <Container fluid className='App'>
        <SessionNotice />
        <Routes />
      </Container>
    )
  }
}

