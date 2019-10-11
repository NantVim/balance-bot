const puppeteer = require('puppeteer');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const write_file = ( file, data ) => new Promise( ( resolve, reject ) => {
    fs.writeFile( file, data, 'utf8', error => {
        if ( error ) {
            console.error( error );
            reject( false );
        } else {
            resolve( true );
        }
    });
});

(async () => {
    try {
        const BASE_URL = 'https://store.steampowered.com';
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        page.setViewport({
            width: 1900,
            height: 1050,
        });

        await page.goto(BASE_URL, { 'waitUntil' : 'networkidle0' });
        debugger;
        let cookies = await page.cookies();

        write_file('cookies.txt', JSON.stringify(cookies));
        // rl.question('Нажми Enter после аторизации', () => {
        //     write_file('cookies.txt', JSON.stringify(cookies));
        //     console.log('Готово');
        //     rl.close(); 
        // });
    } catch (error) {
        console.error(error);
    }
})();