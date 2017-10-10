/* eslint no-unused-expressions: 0 */

import React from 'react'
import { Message } from 'semantic-ui-react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import User, { Register, Login } from 'components/User'

chai.use(chaiEnzyme())

describe('User', () => {
  it('should render Register by default', () => {
    const wrapper = shallow(<User />)
    expect(wrapper).to.have.type(Register)
  })

  it('should render Login if requireLogin=true', () => {
    const wrapper = shallow(<User requireLogin />)
    expect(wrapper).to.have.type(Login)
  })

  it('should not render Register and Login at the same time', () => {
    const registerWrapper = shallow(<User />)
    expect(registerWrapper).to.have.type(Register)
    expect(registerWrapper).to.not.have.type(Login)

    const loginWrapper = shallow(<User requireLogin />)
    expect(loginWrapper).to.have.type(Login)
    expect(loginWrapper).to.not.have.type(Register)
  })

  it('should render two inputs in a register form', () => {
    const wrapper = mount(<User />)
    expect(wrapper).to.have.exactly(3).descendants('input')
  })

  it('should rendet two inputs in a login form', () => {
    const wrapper = mount(<User requireLogin />)
    expect(wrapper).to.have.exactly(2).descendants('input')
  })

  it('should render email input', () => {
    const wrapper = mount(<User />)
    expect(wrapper).to.have.exactly(1).descendants('input[type="email"]')
  })

  it('should render password input', () => {
    const wrapper = mount(<User />)
    expect(wrapper).to.have.exactly(1).descendants('input[type="password"]')
  })

  it('should show message if message prop is passed through', () => {
    const wrapper = mount(<User message='some message' />)
    expect(wrapper.find(Message).length).to.eql(1)
  })

  it('should not message if message prop is not passed through', () => {
    const wrapper = mount(<User />)
    expect(wrapper.find(Message).length).to.eql(0)
  })

  it('clicking submit button should call onSubmit function prop', () => {
    const onSubmitFunc = sinon.spy()
    const wrapper = mount(<User onSubmit={onSubmitFunc} />)

    wrapper.find('[type="submit"]').simulate('click')

    expect(onSubmitFunc.called).to.be.true
  })

  const exampleInputValue = 'my new value'
  const inputNames = ['email', 'password']

  inputNames.forEach((inputName) => {
    it(`should call onChange prop function when ${ inputName } input is changed`, () => {
      const onChangeFunc = sinon.spy()
      const wrapper = mount(<User onChange={onChangeFunc} />)
      wrapper.find(`input[type="${ inputName }"]`).simulate('change', { target: { value: exampleInputValue } })

      expect(onChangeFunc.called).to.be.true
    })

    it(`${ inputName } input: the onUpdate prop function should call the function with the name of the input and its value`, () => {
      const onChangeFunc = sinon.spy()
      const wrapper = mount(<User onChange={onChangeFunc} />)
      wrapper.find(`input[type="${ inputName }"]`).simulate('change', { target: { value: exampleInputValue } })

      expect(onChangeFunc.calledWith({ name: inputName, value: exampleInputValue })).to.be.true
    })
  })
})
