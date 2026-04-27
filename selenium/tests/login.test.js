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
    await loginPage.open();
    await loginPage.login('test@test.com', '1234');

    await driver.sleep(500);

    const message = await loginPage.getMessage();
    expect(message).to.include('Connexion réussie');
  });

  it('Connexion invalide', async () => {
    await loginPage.open();
    await loginPage.login('wrong@test.com', '0000');

    const message = await loginPage.getMessage();
    expect(message).to.include('Identifiants incorrects');
  });
});