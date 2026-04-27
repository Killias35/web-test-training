const { expect } = require('chai');
const { By, until } = require('selenium-webdriver');
const { buildDriver } = require('../driver');
const LoginPage = require('../pages/LoginPage');

describe('Login Test - Différents types de waits', function () {
  let driver;
  let loginPage;

  this.timeout(30000);

  before(async () => {
    driver = await buildDriver();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  /**
   * TEST 1 : IMPLICIT WAIT
   * Selenium attend automatiquement qu’un élément apparaisse
   */
  it('Connexion valide avec Implicit Wait', async () => {
    // Active un délai implicite global
    await driver.manage().setTimeouts({
      implicit: 5000
    });

    await loginPage.open();
    await loginPage.login('test@test.com', '1234');

    // Selenium attend automatiquement l’élément
    const messageElement = await driver.findElement(By.id('message'));
    const message = await messageElement.getText();

    expect(message).to.include('Connexion réussie');
  });

  /**
   * TEST 2 : EXPLICIT WAIT
   * Attend une condition précise (message visible)
   */
  it('Connexion valide avec Explicit Wait', async () => {
    // Désactive implicit wait pour éviter les conflits
    await driver.manage().setTimeouts({
      implicit: 0
    });

    await loginPage.open();
    await loginPage.login('test@test.com', '1234');

    // Attend explicitement que le message apparaisse
    const messageElement = await driver.wait(
      until.elementLocated(By.id('message')),
      3000,
      'Le message de succès ne s’affiche pas'
    );

    await driver.wait(
      until.elementTextContains(messageElement, 'Connexion réussie'),
      3000
    );

    const message = await messageElement.getText();
    expect(message).to.include('Connexion réussie');
  });

  /**
   * TEST 3 : FLUENT WAIT
   * Vérifie régulièrement qu’une condition change (redirection)
   */
  it('Connexion valide avec Fluent Wait', async () => {
    await driver.manage().setTimeouts({
      implicit: 0
    });

    await loginPage.open();
    await loginPage.login('test@test.com', '1234');

    // Vérifie toutes les 500ms pendant max 5s
    await driver.wait(
      async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl.includes('/products');
      },
      5000,
      'La page produits ne s’est pas chargée',
      500
    );

    const finalUrl = await driver.getCurrentUrl();
    expect(finalUrl).to.include('/products');
  });
});