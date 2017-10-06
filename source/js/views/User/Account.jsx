import React, { Component } from 'react'
import { Modal, Loader, Container, Comment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import User from 'components/User'
import * as utils from 'util/index'
import { showAccountModal, hideAccountModal } from 'state/actions/user'
import { ACCOUNT } from 'constants/names'

@connect(state => ({
  modalInfo: state.user.get('modalInfo'),
}))
export default class AccountModal extends Component {
  render() {
    const { modalInfo, dispatch } = this.props
    if (utils.falsy(modalInfo)) return null

    const { alternateAction } = modalInfo

    return (
      <Modal dimmer='blurring' size='tiny' open={true} onClose={() => dispatch(hideAccountModal())}>
        <Modal.Header>{modalInfo.title}</Modal.Header>
        <Modal.Content>
          <User />
        </Modal.Content>
        <Modal.Actions>
          <Comment.Actions>
            <span>{modalInfo.alternateText}</span>
            &nbsp; &nbsp; 
            <a onClick={() => dispatch(showAccountModal(ACCOUNT[alternateAction]))}>{modalInfo.alternateCommand}</a>
          </Comment.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}
