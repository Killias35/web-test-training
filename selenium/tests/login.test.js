const { expect } = require('chai');
const { buildDriver } = require('../driver');
const LoginPage = require('../pages/LoginPage');

describe('Login Test', function () {
  let driver;
  let loginPage;

  this.timeout(20000);

  before(async () => {
    driver = await buildDriver();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  it('Connexion valide', async () => {
  });

  it('Connexion invalide', async () => {
  });
});