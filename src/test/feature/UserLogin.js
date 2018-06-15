module.exports = {
  'user fills in username on login form' : function (browser) {
    browser
      .url("http://motherbook.herokuapp.com")
//      .url("http://localhost:8080")
      .waitForElementVisible('h1', 2000)
      .assert.containsText('h1', 'Welcome to Acebook')
      .waitForElementVisible('#app > div > div > div:nth-child(4) > button', 2000)
      .click('#app > div > div > div:nth-child(4) > button')
      .pause(1000)
      .assert.containsText('label', 'Login:Username')
      .setValue('#app > div > form > label > label > input[type="text"]', 'EllieK')
      .click('#app > div > form > label > input[type="submit"]')
//      .assert.containsText('h1', 'Welcome,')
      .end()
  }
}