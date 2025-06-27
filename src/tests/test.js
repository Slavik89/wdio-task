const { expect } = require('@wdio/globals')
const loginPage = require('../po/login.page')
const mainPage = require('../po/main.page')

describe('My Login application', () => {
/*     it('should login with valid credentials', async () => {
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    }) */

  beforeEach(async () => {    
    await loginPage.open();
  });  

  it('Check the error messages: "Username is required", UC-1', async () => {
    
    // Entering random Username and Password
    await loginPage.enterCredentials('tomsmith', 'SuperSecretPassword!');

    // Clearing the input fields 
    await loginPage.enterCredentials('', '');
    
    // Clicking the login button
    await loginPage.login();
    
    // A variable that gets the error message
    const errorMessage = await loginPage.errorField.getText();
    
    // Checking the main condition
    expect(errorMessage).toContain('Username is required');
  });    

  it('Check the error messages: "Password is required", UC-2', async () => {

    // Entering random Username and Password
    await loginPage.enterCredentials('tomsmith', 'SuperSecretPassword!');

    // Clearing the Password field
    await loginPage.inputPassword.setValue('');

    // Clicking the login button
    await loginPage.login();

    // A variable that gets the error message
    const errorMessage = await loginPage.errorField.getText();

    // Checking the main condition
    expect(errorMessage).toContain('Password is required');
  });

  it("Check successful Login, UC-3", async () => {

    // Entering correct Username and Password
    await loginPage.enterCredentials('standard_user', 'secret_sauce');

    // Clicking the login button
    await loginPage.login();

    // A variable to check successful login to the Main Page
    const title = await mainPage.appTitle.getText();

    // Checking the main condition
    expect(title).toBe('Swag Labs');
  });  
  
})

