const { By } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async open() {
    await this.driver.get('http://127.0.0.1:8080/login.html');
  }

  async login(email, password) {
    await this.driver.findElement(By.id('email')).sendKeys(email);
    await setTimeout(1000);
    await this.driver.findElement(By.id('password')).sendKeys(password);
    await setTimeout(1000);
    await this.driver.findElement(By.id('loginBtn')).click();
  }

  async getMessage() {
    return await this.driver.findElement(By.id('message')).getText();
  }
}

module.exports = LoginPage;