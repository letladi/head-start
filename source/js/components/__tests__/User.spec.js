import React from 'react'
import { Input } from 'semantic-ui-react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'
import { shallow, mount, render } from 'enzyme'
import User, { Register, Login } from 'components/User'

chai.use(chaiEnzyme())


describe('User', () => {
  xit('should render Register by default', () => {    
    const wrapper = shallow(<User />)
    expect(<User />).to.contain(<Register />)
  })

  xit('should render Login if requireLogin=true', () => {
    const wrapper = shallow(<User requireLogin />)

    expect(wrapper).to.contain(<Login />)
  })

  xit('should not render Register and Login at the same time', () => {
    const registerWrapper = shallow(<User />)
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

  const testInputs = () => {
    //const newValue = 'my new value'
    const inputNames = ['email', 'password'] 

    inputNames.forEach((inputName) => {
      it(`should call onChange prop function when ${inputName} input is changed`, () => {
        const onChangeFunc = sinon.spy()
        const wrapper = mount(<User onChange={onChangeFunc} />)
        wrapper.find(`input[type="${inputName}"]`).simulate('change', {target: {value: 'My new value'}});

        expect(onChangeFunc.called).to.be.true
      })
      it(`${inputName} input: the onUpdate prop function should call the function with the name of the input`)
      it(`${inputName} input: the onUpdate prop function should call the function with the value of the input`)
    })
  }

  testInputs()
  
  it('should show message if message prop is passed through')

  describe('UserForm', () => {
    it('clicking submit button should call onSubmit function prop')
  })

})