const { $ } = require('@wdio/globals')

/**
 * Main Page is the page the user sees after a successful login
 */
class MainPage {
    /**
     * A selector that checks the title on the Main Page
     */
    get appTitle () {
        return $('.app_logo');
    }
}

module.exports = new MainPage();