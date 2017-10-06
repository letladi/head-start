import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AccountModal from 'views/User/Account'
import { routeCodes } from 'config/routes'
import { showAccountModal } from 'state/actions/user'
import { ACCOUNT } from 'constants/names'

@connect(state => ({ 
  userInfo: state.user.get('userInfo'),
}))
export default class AppMenu extends Component {
  render() {
    const { userInfo, dispatch } = this.props

    return (
      <div>
      <AccountModal show/>
      <Menu secondary size='massive'>        
        <Menu.Menu position='right'>
          <Menu.Item>
            {(userInfo == void(0)) && 
              <Button.Group>
                  <Button className='register-btn' basic color='blue' onClick={() => dispatch(showAccountModal(ACCOUNT.REGISTER))}>Register</Button>
                  <Button className='login-btn' basic color='blue' onClick={() => dispatch(showAccountModal(ACCOUNT.LOGIN))}>Login</Button>
              </Button.Group>
            }
            {userInfo && 
              <Button.Group>
                <Button basic color='blue'>Logout</Button>
              </Button.Group>
            }
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}