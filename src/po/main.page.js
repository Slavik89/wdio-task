const { $ } = require('@wdio/globals')

/**
 * Main Page is the page the user sees after a successful login
 */
class MainPage {
    /**
     * define selectors using getter methods
     */
    get appTitle () {
        return $('.app_logo');
    }
}

module.exports = new MainPage();