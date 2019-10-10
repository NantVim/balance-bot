const puppeteer = require('puppeteer');
const fs = require('fs');

const read_file = file => new Promise(( resolve, reject ) => {
    fs.readFile( file, 'utf8', ( error, data ) => {
        if ( error ) {
            console.error( error );
            reject( false );
        } else resolve( data );
    });
});

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_0.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            //await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });
            console.log(name + ' | ' +balance);
            console.log('-------------------------');
        }, 10000);
        
        
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_1.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_2.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_3.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_4.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_5.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_6.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_7.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_8.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_9.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_10.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_11.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_12.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_13.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_14.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_15.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.setCookie( ...JSON.parse( await read_file( 'cookies_16.txt' ) || '[]' ) );
        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });

        await page.waitForSelector('a[id="header_wallet_balance"]');
        let balance = await page.evaluate(() => {
            let bal = document.querySelector('a[id="header_wallet_balance"]').innerText;
            return bal;
        });

        await page.waitForSelector('span[id="account_pulldown"]');
        let name = await page.evaluate(() => {
            let name = document.querySelector('span[id="account_pulldown"]').innerText;
            return name;
        });

        setInterval(() => {
            console.log(name + ' | ' + balance);
            console.log('-------------------------');
        }, 10000);
        
        //setInterval(() => {console.clear();}, 9990);
    } catch (error) {
        console.error(error);
    }
})();