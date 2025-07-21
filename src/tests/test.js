const { expect } = require('@wdio/globals')
const loginPage = require('../po/login.page')
const mainPage = require('../po/main.page')
const { username, password, expectedResultForTest1, expectedResultForTest2, expectedResultForTest3 } = require('./testData')

describe('My Login application', () => {

  beforeEach(async () => {   
    
    // 1. Go to Login page
    await loginPage.open();

    // 2. Entering the username and password
    await loginPage.enterCredentials(username, password);
  });  

  it('Check the error messages: "Username is required", UC-1', async () => {

    // 1.3 Deleting the username
    await loginPage.inputUsername.click();
    await browser.keys(["Control", "a", "Delete"]);

    // 1.4 Deleting the password
    await loginPage.inputPassword.click();
    await browser.keys(["Control", "a", "Delete"]);    
    
    // 1.5 Clicking the login button
    await loginPage.loginButton.click();
    
    // 1.6 A variable that gets the error message
    const errorMessage = await loginPage.errorField.getText();
    
    // 1.7 Checking the main condition
    expect(errorMessage).toContain(expectedResultForTest1);
  });    

  it('Check the error messages: "Password is required", UC-2', async () => {

    // 2.3 Deleting the password
    await loginPage.inputPassword.click();
    await browser.keys(["Control", "a", "Delete"]);

    // 2.4 Clicking the login button
    await loginPage.loginButton.click();

    // 2.5 A variable that gets the error message
    const errorMessage = await loginPage.errorField.getText();

    // 2.6 Checking the main condition
    expect(errorMessage).toContain(expectedResultForTest2);
  });

  it("Check successful Login, UC-3", async () => {

    // 3.3 Clicking the login button
    await loginPage.loginButton.click();

    // 3.4 A variable to check successful login to the Main Page
    const title = await mainPage.appTitle.getText();

    // 3.5 Checking the main condition
    expect(title).toBe(expectedResultForTest3);
  });
  
})

