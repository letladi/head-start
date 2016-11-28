const test = require('tap').test

test('getting started', (t1) => {
  t1.plan(1)
  t1.test('test case', (t11) => {
    t11.plan(1)
    t11.equal(4, 4)
  })
})
