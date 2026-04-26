const { expect } = require('chai');
const { By } = require('selenium-webdriver');
const { buildDriver } = require('../driver');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

describe('Checkout Test', function () {
  let driver;
  let loginPage;
  let productsPage;
  let cartPage;

  this.timeout(20000);

  before(async () => {
    driver = await buildDriver();
    loginPage = new LoginPage(driver);
    productsPage = new ProductsPage(driver);
    cartPage = new CartPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  it('Parcours complet commande', async () => {
  });
});