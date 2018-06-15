module.exports = {
  'visit homepage and see home buttons' : function (browser) {
    browser
      .url("http://motherbook.herokuapp.com")
      .waitForElementVisible('h1', 5000)
      .assert.containsText('h1', 'Welcome to Acebook')
      .end()
  }
}