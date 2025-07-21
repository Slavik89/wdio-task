const { browser } = require('@wdio/globals')

/**
* Base page
*/
module.exports = class Page {
    /**
    * Opens a Base page
    */
    open () {
        return browser.url('https://www.saucedemo.com/')
    }
}
