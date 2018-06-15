module.exports = {
  'click on login button' : function (browser) {
    browser
      .url("http://motherbook.herokuapp.com")
      .waitForElementVisible('h1', 2000)
      .assert.containsText('h1', 'Welcome to Acebook')
      .waitForElementVisible('#app > div > div > div:nth-child(4) > button', 2000)
      .click('#app > div > div > div:nth-child(4) > button')
      .pause(1000)
      .assert.containsText('label', 'Login:Username')
      .end()
  }
}