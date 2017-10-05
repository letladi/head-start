import React, { Component } from 'react'
import RouteStatus from 'components/Global/RouteStatus'

export default class NotFound extends Component {
  render() {
    return (
      <RouteStatus code={404}>
        <div className='NotFound'>
          <h1>Not Found</h1>
        </div>
      </RouteStatus>
    )
  }
}
