# Wdio task
## Project Setup  
**npm i**  
This command installs all required project dependencies.

## How to Run the Tests  
**npm run wdio**  
This command starts the test runner and runs all e2e tests.

## General Description  
This project runs end-to-end (e2e) tests using the **WebDriverIO** framework (version 9) and **Mocha** test runner.  
The goal of the project is to test the login functionality of the website [https://www.saucedemo.com/](https://www.saucedemo.com/).  

This project uses the **Page Object Model (POM)** pattern.  
Also, the structure of the project is based on the **TAF Layers** approach.
**Locators used: CSS**.

The tests can be run in two browsers:
1. **Chrome** 
2. **Firefox**  

## Description of the tests
**UC-1 Test Login form with empty credentials:**

Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".

**UC-2 Test Login form with credentials by passing Username:**

Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".

**UC-3 Test Login form with credentials by passing Username & Password:**

Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.