//module.exports = {
//  'signed up user posts' : function (browser) {
//    browser
//      .url("http://motherbook.herokuapp.com")
//      .waitForElementVisible('h1', 2000)
//      .assert.containsText('h1', 'Welcome to Acebook')
//      .waitForElementVisible('#app > div > div > div:nth-child(3) > button', 2000)
//      .click('#app > div > div > div:nth-child(3) > button')
//      .pause(1000)
//      .assert.containsText('label', 'Sign Up:Username (must be unique)First NameLast Name')
//      .setValue('#app > div > form > label > label:nth-child(1) > input[type="text"]', 'EllieK')
//      .setValue('#app > div > form > label > label:nth-child(2) > input[type="text"]', 'ELLIE')
//      .setValue('#app > div > form > label > label:nth-child(3) > input[type="text"]', 'BACON')
//      .click('#app > div > form > label > input[type="submit"]')
//      .assert.containsText('h1', 'Welcome,')
//      .setValue('#app > div > div:nth-child(2) > form > label > input[type="text"]', 'I love Bacon')
//      .pause(1000)
//      .assert.containsText('#app > div > div:nth-child(3) > article > div > div:nth-child(1) > div > p:nth-child(3)', 'Post content: I love bacon')
//      .end()
//  }
//}