module.exports = {
  'visit homepage and see home buttons' : function (browser) {
    browser
      .url("http://motherbook.herokuapp.com")
      .waitForElementVisible('h1', 2000)
      .assert.containsText('h1', 'Welcome to Acebook')
      .waitForElementVisible('#app > div > div > div:nth-child(3) > button', 2000)
      .click('#app > div > div > div:nth-child(3) > button')
      .pause(1000)
      .assert.containsText('label', 'Sign Up:Username (must be unique)First NameLast Name')
      .end()
  }
}