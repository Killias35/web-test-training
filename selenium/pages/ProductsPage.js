const { By } = require('selenium-webdriver');

class ProductsPage {
  constructor(driver) {
    this.driver = driver;
  }

  async addFirstProduct() {
    const button = await this.driver.findElement(By.xpath("(//button[contains(text(),'Ajouter')])[1]"));
    await button.click();
    
  }

  async goToCart() {
    await this.driver.findElement(By.linkText('Panier')).click();
  }
}

module.exports = ProductsPage;  