const { By } = require('selenium-webdriver');

class CartPage {
  constructor(driver) {
    this.driver = driver;
  }

  async getCartItems() {
    return await this.driver.findElements(By.className('cart-item'));
  }

  async removeFirstItem() {
    const btn = await this.driver.findElement(By.xpath("(//button[contains(text(),'Supprimer')])[1]"));
    await btn.click();
  }

  async goToCheckout() {
    await this.driver.findElement(By.linkText('Passer commande')).click();
  }
}

module.exports = CartPage;