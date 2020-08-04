const puppeteer = require('puppeteer');
const fs = require('fs');
let data = require('./allProductPages.json');

async function checkPageRAQ(link) {
    const broswer = await puppeteer.launch();
    let page = await broswer.newPage();
    await page.goto(link);

    raqSelector = '#raq_form';

    if (await page.$(raqSelector) !== null) {
        return true;
    } else {
        return false;
    }
};


let resultSet = [];
data.forEach(element => {
    element.forEach(e => {
        resultSet += element.filter(checkPageRAQ);
    })
    // .then((resultSet) => {
    //     let data = JSON.stringify(resultSet);
    //     fs.writeFileSync('allProductPages.json', data);
    // })
});