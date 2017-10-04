import nightmare from 'nightmare'
import { visit } from 'util/helpers'
 
describe('When visiting the homepage', () => {
  it('it welcomes the user', async () => {
    const page = visit('/')

    let text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('Verifying Your Session...')
  })
})