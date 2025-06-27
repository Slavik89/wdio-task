const { expect } = require('@wdio/globals')
const LoginPage = require('../po/login.page')
const SecurePage = require('../po/secure.page')

describe('My Login application', () => {
/*     it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    }) */

  beforeEach(async () => {
    await browser.url("/");
  });  

  it('Check the error messages: "Username is required", UC-1', async () => {
    
    // Username and Password fields
    const usernameInput = await $('.form_group input[data-test="username"]');
    const passwordInput = await $('.form_group input[data-test="password"]');    
    
/*     await usernameInput.click();
    await browser.pause(1500); */


    await usernameInput.setValue('user');
    await passwordInput.setValue('password');

    await usernameInput.setValue('');
    await passwordInput.setValue('');    
   

    const loginButton = await $('form input[data-test="login-button"]');    
    await loginButton.click();  

    
    const errorField = await $('.error-message-container h3[data-test="error"]');    
    const errorMessage = await errorField.getText();

    expect(errorMessage).toContain('Username is required');
  });    

  it('Check the error messages: "Password is required", UC-2', async () => {
    
    // Username and Password fields
    const usernameInput = await $('.form_group input[data-test="username"]');
    const passwordInput = await $('.form_group input[data-test="password"]');


    await usernameInput.setValue('user');
    await passwordInput.setValue('password');

    // await usernameInput.setValue('');
    await passwordInput.setValue('');    
   

    const loginButton = await $('form input[data-test="login-button"]');    
    await loginButton.click();  

    
    const errorField = await $('.error-message-container h3[data-test="error"]');    
    const errorMessage = await errorField.getText();

    expect(errorMessage).toContain('Password is required');
  });

  it("Check successful Login, UC-3", async () => {
        
    // Username and Password fields
    const usernameInput = await $('.form_group input[data-test="username"]');
    const passwordInput = await $('.form_group input[data-test="password"]');    
    

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');

    const loginButton = await $('form input[data-test="login-button"]');    

    await loginButton.click();


    // Checking that we are really logged in and entered the application page
    const appTitle = await $('.app_logo');
    const title = await appTitle.getText();
    expect(title).toBe('Swag Labs');
  });
  
  
})

