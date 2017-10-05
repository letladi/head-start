import nightmare from 'nightmare'
import { expect } from 'chai'
import { visit } from 'util/helpers'
 
describe('When visiting the homepage', async () => {
  it('it welcomes the user', async () => {
    const page = visit('/')

    let text = await page.evaluate(() => document.body.textContent).end()

    expect(text).to.not.include('Verifying Your Session...')
  })
})