const puppeteer = require( "puppeteer" ),
  { WIDTH, HEIGHT} = require("./constants");


class BrowserSession {

  async setup() {
    this.browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 40,
        devtools: false
        }
    );
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: WIDTH, height: HEIGHT });
  }

  async teardown() {    
    this.browser.close();
  }
}

module.exports = new BrowserSession();
