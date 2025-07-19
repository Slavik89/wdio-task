const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
      return $('.form_group input[data-test="username"]');
    }

    get inputPassword () {
      return $('.form_group input[data-test="password"]');
    }

    get loginButton () {
        return $('form input[data-test="login-button"]');
    }

     get errorField () {
        return $('.error-message-container h3[data-test="error"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async enterCredentials (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
