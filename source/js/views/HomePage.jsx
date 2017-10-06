import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import AppMenu from 'components/Menu'

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <AppMenu />
      </Container>
    )
  }
}
