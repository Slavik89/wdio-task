const { expect } = require('@wdio/globals')
const loginPage = require('../po/login.page')
const mainPage = require('../po/main.page')
const { username, password } = require('./testData')

describe('My Login application', () => {

  beforeEach(async () => {    
    await loginPage.open();
  });  

  it('Check the error messages: "Username is required", UC-1', async () => {
    
    // 1.1 Entering the username
    await loginPage.inputUsername.click();
    await loginPage.inputField(username);

    // 1.2 Entering the password
    await loginPage.inputPassword.click();    
    await loginPage.inputField(password);

    // 1.3 Deleting the username
    await loginPage.inputUsername.click();
    await browser.keys(["Control", "a", "Delete"]);

    // 1.4 Deleting the password
    await loginPage.inputPassword.click();
    await browser.keys(["Control", "a", "Delete"]);    
    
    // 1.5 Clicking the login button
    await loginPage.login();
    
    // 1.6 A variable that gets the error message
    const errorMessage = await loginPage.errorField.getText();
    
    // 1.7 Checking the main condition
    expect(errorMessage).toContain('Username is required');
  });    

  it('Check the error messages: "Password is required", UC-2', async () => {   

    // 2.1 Entering the username
    await loginPage.inputUsername.click();
    await loginPage.inputField(username);

    // 2.2 Entering the password
    await loginPage.inputPassword.click();    
    await loginPage.inputField(password);

    // 2.3 Deleting the password
    await loginPage.inputPassword.click();
    await browser.keys(["Control", "a", "Delete"]);

    // 2.4 Clicking the login button
    await loginPage.login();

    // 2.5 A variable that gets the error message
    const errorMessage = await loginPage.errorField.getText();

    // 2.6 Checking the main condition
    expect(errorMessage).toContain('Password is required');
  });

  it("Check successful Login, UC-3", async () => {

    // 3.1 Entering correct Username and Password
    await loginPage.enterCredentials(username, password);

    // 3.2 Clicking the login button
    await loginPage.login();

    // 3.3 A variable to check successful login to the Main Page
    const title = await mainPage.appTitle.getText();

    // 3.4 Checking the main condition
    expect(title).toBe('Swag Labs');
  });
  
})

