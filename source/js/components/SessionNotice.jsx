import React, { Component } from 'react'
import { Modal, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as utils from 'util/index'

@connect(state => ({
  verifyingSession: state.user.get('verifyingSession'),
}))
export default class SessionNotice extends Component {

  static propTypes = {
    verifyingSession: PropTypes.bool,
  }

  render() {
    const { verifyingSession } = this.props
    if (utils.falsy(verifyingSession)) return null

    return (
      <Modal dimmer='blurring' open={verifyingSession}>
        <Loader size='massive'>Verifying Your Session...</Loader>
      </Modal>
    )
  }
}
