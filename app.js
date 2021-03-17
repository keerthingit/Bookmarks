const puppeteer = require('puppeteer');

(async () =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.google.com');
    page.setViewport({ width: 1300, height: 2000, deviceScaleFactor: 1})
    await page.screenshot({path: 'screenshot.png'})
    await browser.close();
})();