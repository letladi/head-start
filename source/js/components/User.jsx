import React, { Component } from 'react'
import { Form, Input, Button, Label, Message } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'

const UserForm = ({ onChange, onSubmit, commandText, message }) => (
  <Form>
    <Form.Field>
      <Label pointing='below'>Email</Label>
      <Input
        placeholder='Email'
        name='email'
        type='email'
        onChange={({ target }) => onChange({ name: 'email', value: target.value })}
      />
    </Form.Field>
    <Form.Field>
      <Label pointing='below'>Password</Label>
      <Input
        placeholder='Password'
        name='password'
        type='password'
        onChange={({ target }) => onChange({ name: 'password', value: target.value })}
      />
    </Form.Field>
    <Form.Field>
      {message && <Message info content={message} />}
    </Form.Field>
    <Form.Field>
      <Button type='submit' onClick={onSubmit}>{commandText}</Button>
    </Form.Field>
  </Form>
)

UserForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  commandText: PropTypes.string,
  message: PropTypes.string,
}

export const Register = (props) => <UserForm {...props} command='Register' />

export const Login = (props) => <UserForm {...props} command='Login' />

export default class User extends Component {

  static propTypes = {
    requireLogin: PropTypes.bool,
  }

  render() {
    const { requireLogin } = this.props

    return requireLogin ? <Login {...this.props} /> : <Register {...this.props} />
  }
}
