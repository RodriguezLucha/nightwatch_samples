this.demoTestGoogle = function (browser) {
  browser
    .url('https://www.google.com')
    .waitForElementVisible('body', 1000)
    .setValue('input[type=text]', 'nightwatch')
    .waitForElementVisible('input[name=btnK]', 1000)
    .click('input[name=btnK]')
    .pause(1000)
    .assert.containsText('#main', 'The Night Watch')
    .end();
};