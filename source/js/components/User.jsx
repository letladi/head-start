import React, { Component } from 'react'
import { Form, Input, Button, Label, Message } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'
import { map, startCase } from 'lodash'

const UserForm = ({
  inputs, onChange, onSubmit, commandText, message, submitting, formErrors = {},
}) => (
  <Form>
    {map(inputs, ({ name, type }, i) => (
      <Form.Field key={i}>
        <Label pointing='below' basic color={formErrors[name] ? 'red' : 'blue'}>{startCase(formErrors[name] || name)}</Label>
        <Input
          placeholder={startCase(name)}
          name={name}
          type={type}
          onChange={({ target }) => onChange({ name, value: target.value })}
        />
      </Form.Field>
    ))}
    <Form.Field>
      {message && <Message info content={message} />}
    </Form.Field>
    <Form.Field>
      <Button type='submit' fluid color='green' onClick={onSubmit} loading={submitting} disabled={submitting}>{commandText}</Button>
    </Form.Field>
  </Form>
)

UserForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  commandText: PropTypes.string.isRequired,
  message: PropTypes.string,
  inputs: PropTypes.array.isRequired,
  submitting: PropTypes.bool,
  formErrors: PropTypes.object,
}

export const Register = (props) => {
  const inputs = [
    { type: 'text', name: 'username' },
    { type: 'email', name: 'email' },
    { type: 'password', name: 'password' },
  ]

  return <UserForm {...props} inputs={inputs} commandText='Register' />
}

export const Login = (props) => {
  const inputs = [
    { type: 'email', name: 'email' },
    { type: 'password', name: 'password' },
  ]
  return <UserForm {...props} inputs={inputs} commandText='Login' />
}

export default class User extends Component {

  static propTypes = {
    requireLogin: PropTypes.bool,
    userFormInfo: PropTypes.object,
  }

  render() {
    const { requireLogin } = this.props

    return requireLogin ? <Login {...this.props} /> : <Register {...this.props} />
  }
}
