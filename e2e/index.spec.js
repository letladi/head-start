import nightmare from 'nightmare'
//import { expect } from 'chai'
import { visit } from 'util/helpers'

jasmine.DEFUALT_TIMEOUT_INTERVAL = 30000
 
describe('When visiting the homepage', async () => {
  it('it welcomes the user', async () => {
    const page = visit('/')

    let text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('Verifying Your Session...')
  })
})