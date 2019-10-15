const puppeteer = require('puppeteer');
const BASE_URL = 'https://store.steampowered.com';
(async () => {

    try {

        const browser = await puppeteer.launch({ headless: false});
        
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3800.0 Safari/537.36');
        page.setViewport({
            width: 1900,
            height: 1050,
        });
        await page.goto(BASE_URL);
        
    } catch (error) {
        console.log(error);
    }

})();