const puppeteer = require('puppeteer');
const fs = require('fs');
// let data = require('./allProductPages.json');
let data = require('./allProductPages.json');
let reduced = require('./reducedPages.json');

async function checkPageRAQ(link) {
    const browser = await puppeteer.launch();

    try {
        let page = await browser.newPage();
        await page.goto(link);
        raqSelector = '#raq_form';
        page.waitForSelector(raqSelector);
        if (await page.$(raqSelector) !== null) {
            return link;
        } else {
            return false;
        }
    } catch (err) {
        console.log(`Error processing ${link}: ${err}`);

    }
    await browser.close();


};

let resultSet = [];
reduced.forEach(element => {
    element.forEach(e => {
        let singlePage = checkPageRAQ(e);
        singlePage.then(function (result) {
            resultSet.push(result);
        }).then(() => {
            let file = JSON.stringify(resultSet);
            fs.writeFileSync('reducedFinal.json', file);
        })
    })

});

// let result = checkPageRAQ('https://www.alphagraphics.com/centers/idaho-falls-idaho-us679/products/marketing-design/graphic-design.html');
// result.then(() => {
//     console.log(result);
// });