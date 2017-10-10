/* eslint no-unused-expressions: 0 */

import nightmare from 'nightmare'
import { expect } from 'chai'
import { visit } from './helpers'
 
describe('When visiting the homepage', () => {
  it('should display the "Register" button when visiting the home page', async () => {
    const page = visit('/')

    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).to.include('Register')
  })

  it('should display the Register Modal when the Register button is clicked', async () => {
    const page = visit('/')

    const title = await page.click('.register-btn').wait('.modal div.header').evaluate(() => document.querySelector('.modal div.header').innerHTML ).end()

    expect(title).to.include('Register a new account')
  })

  it('should display the Login form if the alternate action on the Register form is clicked', async () => {
    const page = visit('/')

    const title = await page.click('.register-btn').wait('.modal div.header').click('.alternate-btn').evaluate(() => document.querySelector('.modal div.header').innerHTML ).end()
  
    expect(title).to.include('Login to your account')
  })

  it('should display the "Login" button when visiting the home page', async () => {
    const page = visit('/')

    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).to.include('Login')
  })

  it('should display the Register form if the alternate action on the Login form is clicked', async () => {
    const page = visit('/')

    const title = await page.click('.login-btn').wait('.modal div.header').click('.alternate-btn').evaluate(() => document.querySelector('.modal div.header').innerHTML ).end()
  
    expect(title).to.include('Register a new account')
  })

  it('should display a distinct login form if the login button is clicked', async () => {
    const page = visit('/')

    const submitBtnText = await page.click('.login-btn').wait('.modal div.header').evaluate(() => document.querySelector('button[type="submit"]').innerHTML ).end()

    expect(submitBtnText).to.include('Login')
  })


  it('should display the Login Modal when the Login button is clicked', async () => {
    const page = visit('/')

    const title = await page.click('.login-btn').wait('.modal div.header').evaluate(() => document.querySelector('.modal div.header').innerHTML ).end()

    expect(title).to.include('Login to your account')
  })

  it('should hide the Logout button when visiting the home page and not logged in', async () => {
    const page = visit('/')

    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).to.not.include('Logout')
  })
  it('should display the Logout button after logging in')
  it('should hide the Register and Login buttons when logged in')
})