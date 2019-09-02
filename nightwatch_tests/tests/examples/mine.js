//Be able to go to a specific URL and assert something is visible
this.goToSpecificURLandAssert = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('.App', 1000)
    .assert.containsText('.App', 'The app.')
};
//Be able to go to specific URL and wait for something to show up after a timeout
this.goToSpecificURLandWaitForSomething = function (browser) {
  browser
    .url('http://localhost:3000/')
    .waitForElementVisible('.slow-loading', 1000)
    .waitForElementVisible('.slow-loading .cactus', 3500)
    .assert.containsText('.slow-loading .cactus', 'Cactus!')
    .end();
};
//Be able to go to specific URL and click a button
//Be able to go to a form and fill it out
//Be able to generate random data, and use it to to fill in some form
