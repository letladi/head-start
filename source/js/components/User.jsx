import React, { Component } from 'react'
import { Form, Input, Button, Label, Message } from 'semantic-ui-react'

const UserForm = ({ onChange, onSubmit, command, message }) => (
  <Form>
    <Form.Field>
      <Label pointing='below'>Email</Label>
      <Input placeholder='Email' name='email' type='email' 
        onChange={({ target }) => onChange({ name: 'email', value: target.value })} 
      />
    </Form.Field>
    <Form.Field>
      <Label pointing='below'>Password</Label>
      <Input placeholder='Password' name='password' type='password' 
        onChange={({ target }) => onChange({ name: 'password', value: target.value })} 
      />
    </Form.Field>
    <Form.Field>
      {message && <Message info content={message} />}
    </Form.Field>
    <Form.Field>
      <Button type='submit' onClick={onSubmit}>{command}</Button>
    </Form.Field>
  </Form>
)

export const Register = (props) => <UserForm { ...props } command='Register' />

export const Login = (props) => <UserForm { ...props } command='Login' />

export default class User extends Component {
  render() {
    const { requireLogin } = this.props

    return requireLogin ? <Login {...this.props} /> : <Register {...this.props} />
  }
}




