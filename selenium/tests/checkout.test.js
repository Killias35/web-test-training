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
    await loginPage.open();
    await loginPage.login('test@test.com', '1234');

    await driver.sleep(1000);

    await productsPage.addFirstProduct();
    await productsPage.goToCart();
    await cartPage.goToCheckout();

    await driver.findElement(By.id('name')).sendKeys('John Doe');
    await driver.findElement(By.id('address')).sendKeys('123 rue test');
    await driver.findElement(By.id('orderBtn')).click();

    await driver.sleep(1000);

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    expect(bodyText).to.include('Commande réussie');
  });
});