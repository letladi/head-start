import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import AppMenu from 'components/Menu'

export default class HomePage extends Component {
  render() {
    const activeItem = 'home'
    return (
      <Container>
        <AppMenu />
      </Container>
    )
  }
}
