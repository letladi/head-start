import React, { Component } from 'react'
import { Modal, Comment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import User from 'components/User'
import * as utils from 'util/index'
import * as userActions from 'state/actions/user'
import { ACCOUNT } from 'constants/names'

@connect(state => ({
  modalInfo: state.user.get('modalInfo'),
  userFormInfo: state.user.get('userFormInfo'),
}))
export default class AccountModal extends Component {

  static propTypes = {
    modalInfo: PropTypes.oneOf([ACCOUNT.REGISTER, ACCOUNT.LOGIN]),
    userFormInfo: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    const { modalInfo, userFormInfo, dispatch } = this.props
    if (utils.falsy(modalInfo)) return null

    const { alternateAction } = modalInfo
    const showLoginForm = (modalInfo.name == ACCOUNT.LOGIN.name)
    const submitFunc = showLoginForm ? userActions.loginUser : userActions.registerUser

    return (
      <Modal dimmer='blurring' size='tiny' open={true} onClose={() => dispatch(userActions.hideAccountModal())}>
        <Modal.Header>{modalInfo.title}</Modal.Header>
        <Modal.Content>
          <User
            requireLogin={showLoginForm}
            userFormInfo={userFormInfo}
            onChange={(info) => dispatch(userActions.captureUserFormInfo(info))}
            onSubmit={() => dispatch(submitFunc(userFormInfo))}
          />
        </Modal.Content>
        <Modal.Actions>
          <Comment.Actions>
            <span>{modalInfo.alternateText}</span>
            &nbsp; &nbsp;
            <Button
              basic
              color='grey'
              className='alternate-btn'
              onClick={() => dispatch(userActions.showAccountModal(ACCOUNT[alternateAction]))}
            >
              {modalInfo.alternateCommand}
            </Button>
          </Comment.Actions>
        </Modal.Actions>
      </Modal>
    )
  }
}
