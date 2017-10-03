import React, { Component } from 'react'
import { Form, Input, Button, Label } from 'semantic-ui-react'

const UserForm = ({ onChange }) => (
  <Form>
    <Form.Field>
      <Label pointing='below'>Email</Label>
      <Input placeholder='Email' name='email' type='email' onChange={onChange} />
    </Form.Field>
    <Form.Field>
      <Label pointing='below'>Password</Label>
      <Input placeholder='Password' name='password' type='password' onChange={onChange} />
    </Form.Field>
    <Form.Field>
      <Button type='submit'>Submit</Button>
    </Form.Field>
  </Form>
)

export const Register = (props) => <UserForm { ...props } />

export const Login = (props) => <UserForm { ...props } />

export default class User extends Component {

  render() {
    const { requireLogin } = this.props

    return requireLogin ? <Login {...this.props} /> : <Register {...this.props} />
  }
}




