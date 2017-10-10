import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AccountModal from 'views/User/Account'
import * as userActions from 'state/actions/user'
import { ACCOUNT } from 'constants/names'

@connect(state => ({
  userInfo: state.user.get('userInfo'),
}))
export default class AppMenu extends Component {

  static propTypes = {
    userInfo: PropTypes.object,
    dispatch: PropTypes.func,
  }

  render() {
    const { userInfo, dispatch } = this.props

    return (
      <div>
        <AccountModal show />
        <Menu secondary size='massive'>
          <Menu.Menu position='right'>
            <Menu.Item>
              {(userInfo == void(0)) &&
                <Button.Group>
                  <Button className='register-btn' basic color='blue' onClick={() => dispatch(userActions.showAccountModal(ACCOUNT.REGISTER))}>Register</Button>
                  <Button className='login-btn' basic color='blue' onClick={() => dispatch(userActions.showAccountModal(ACCOUNT.LOGIN))}>Login</Button>
                </Button.Group>
              }
              {userInfo &&
                <Button.Group>
                  <Button basic color='blue' onClick={() => dispatch(userActions.logoutUser())}>Logout</Button>
                </Button.Group>
              }
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
