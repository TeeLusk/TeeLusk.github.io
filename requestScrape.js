const puppeteer = require('puppeteer');
const fs = require('fs');
//import array from allprodcutlinks.json = allLinks





// --------------------------------------------------
// CHECK PAGES

let resultSet = [];
let oppositeSet = [];

async function checkForRAQ(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(url);
    } catch (error) {
        console.log(`Error: ${url} not a valid page`);
    }
    
    //   await page.screenshot({path: 'example.png'});
    formSelector = '.wrapper-raq-form';

    try {
        await page.waitForSelector(formSelector, { timeout: 5000 })
        // console.log('Form Found');
        resultSet.push(url);
        return resultSet;
      } catch (error) {
        console.log("The element didn't appear.");
        oppositeSet.push(url);
      }

    await browser.close();
    // console.log(resultSet);
};


// -------------------------------------------------
// OUTPUT RESULTS
async function outputToFile(results) {
    fs.writeFile('results.txt', results, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('Results saved!');
    });
}


// -------------------------------------------------
// MAIN CALL
async () => {

}


// SELECTORS
// #content-body-center > div > section > div > div.listing.listing-one > section > div

// #content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap > div:nth-child(1) > section > a

// document.querySelector('#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap').children.length