/* eslint no-unused-expressions: 0 */

import React from 'react'
import { Modal } from 'semantic-ui-react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import Account from 'views/User/Account'
import { ACCOUNT } from 'constants/names'

chai.use(chaiEnzyme())

describe('User/Account', () => {
  it('should not render anything if prop modalInfo is undefined', () => {
    const wrapper = shallow(<Account />)
    expect(wrapper).to.be.blank()
  })

  it('should not render anything if prop modalInfo is null', () => {
    const wrapper = shallow(<Account modalInfo={null} />)
    expect(wrapper).to.be.blank()
  })

  it('should render something when modalInfo is provided', () => {
    const wrapper = shallow(<Account modalInfo={ACCOUNT.REGISTER} />)
    expect(wrapper).to.not.blank()
  })

  it('should render a Modal', () => {
    const wrapper = shallow(<Account modalInfo={ACCOUNT.REGISTER} />)
    expect(wrapper).to.have.descendants(Modal)
  })
})

