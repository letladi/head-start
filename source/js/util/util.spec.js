/* eslint no-unused-expressions: 0 */

import { expect } from 'chai'
import * as utils from 'util/'

describe('utility methods', () => {
  describe('falsy', () => {
    const { falsy } = utils
    const falsyValues = [null, NaN, void(0), false, 0, '']

    falsyValues.forEach((val) => {
      it(`should return true if the value is ${ JSON.stringify(val) }`, () => {
        expect(falsy(val)).to.be.true
      })
    })

    const truthyValues = [1, '0', true, {}, []]

    truthyValues.forEach((val) => {
      it(`should return false if the value is ${ JSON.stringify(val) }`, () => {
        expect(falsy(val)).to.be.false
      })
    })
  })
})
