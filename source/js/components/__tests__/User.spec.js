import React from 'react'
import { Input } from 'semantic-ui-react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import { shallow, mount, render } from 'enzyme'
import User, { Register, Login } from 'components/User'

chai.use(chaiEnzyme())

describe('User', () => {
  it('should render Register by default', () => {
    const wrapper = shallow(<User />)
    
    expect(wrapper).to.contain(<Register />)
    expect(wrapper).to.not.contain(<Login />)
  })

  it('should render Login if requireLogin=true', () => {
    const wrapper = mount(<User requireLogin />)

    expect(wrapper).to.contain(<Login />)
  })

  it('should not render Register and Login at the same time', () => {
    const registerWrapper = mount(<User />)
    expect(registerWrapper).to.contain(<Register />)
    expect(registerWrapper).to.not.contain(<Login />)

    const loginWrapper = shallow(<User requireLogin />)
    expect(loginWrapper).to.contain(<Login />)
    expect(loginWrapper).to.not.contain(<Register />)
  })

  it('should render two inputs in a form', () => {
    const wrapper = mount(<User />)

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

  xit('should call onChange prop function when email input is changed', () => {
    const onChangeFunc = sinon.spy()
    const wrapper = mount(<User onChange={onChangeFunc} />)
    wrapper.find('input[type="email"]').simulate('change', {target: {value: 'My new value'}});

    expect(onChangeFunc.called).to.be.true
  })

  it('should call onUpdate prop function when password input is changed')

  // ['email', 'password'].forEach((inputName) => {
  //   it(`${inputName} input: the onUpdate prop function should call the function with the name of the input`)
  //   it(`${inputName} input: the onUpdate prop function should call the function with the value of the input`)
  // })
  
  it('should show message if message prop is passed through')

  describe('Register', () => {
    it('clicking submit button should call onSubmit function prop')
  })

  describe('Login', () => {
    it('clicking submit button should call onSubmit function prop')
  })

})