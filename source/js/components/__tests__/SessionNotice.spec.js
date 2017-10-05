/* eslint no-unused-expressions: 0 */

import React from 'react'
import { Modal } from 'semantic-ui-react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow } from 'enzyme'
import SessionNotice from 'components/SessionNotice'

chai.use(chaiEnzyme())

describe('SessionNotice', () => {
  it('should not render anything if prop verifyingSession is undefined', () => {
    const wrapper = shallow(<SessionNotice />)
    expect(wrapper).to.be.blank()
  })
  it('should not render anything if prop verifyingSession is false', () => {
    const wrapper = shallow(<SessionNotice verifyingSession={false} />)
    expect(wrapper).to.be.blank()
  })
  it('should render something when verifyingSession=true', () => {
    const wrapper = shallow(<SessionNotice verifyingSession />)
    expect(wrapper).to.not.blank()
  })
  it('should render the a Modal', () => {
    const wrapper = shallow(<SessionNotice verifyingSession />)
    expect(wrapper).to.have.descendants(Modal)
  })
})
