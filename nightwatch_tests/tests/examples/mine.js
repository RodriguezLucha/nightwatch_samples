//Be able to go to a specific URL and assert something is visible
this.goToSpecificURLandAssert = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('.App', 1000)
    .assert.containsText('.App', 'The app.');
};
//Be able to go to specific URL and wait for something to show up after a timeout
this.goToSpecificURLandWaitForSomething = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('.slow-loading', 1000)
    .waitForElementVisible('.slow-loading .cactus', 3500)
    .assert.containsText('.slow-loading .cactus', 'Cactus!');
};
//Be able to go to specific URL and click a button
this.clickAButton = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('.addOne', 1000)
    .click('.addOne')
    .assert.containsText('.counter-value', '1')
    .click('.addOne')
    .assert.containsText('.counter-value', '2')
    .click('.addOne')
    .assert.containsText('.counter-value', '3');
};
//Be able to go to a form and fill it out
this.clickAButton = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('.convert-word', 1000)
    .setValue('.convert-word .word', 'the quick brown fox')
    .submitForm('.convert-word')
    .assert.containsText('.converted', '7h3 quick br0wn ph0x');
};
//Be able to generate random data, and use it to to fill in some form
