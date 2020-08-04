const puppeteer = require('puppeteer');
const fs = require('fs');
let data = require('./allProductPages.json');

async function checkPage(link) {
    const browser = await puppeteer.launch();
    let result;
    try {
        let page = await browser.newPage();
        page.goto(link);
        let result
    } catch (err) {
        console.log(err);
    }
    return ;
}

data.forEach(element => {
    element.forEach(e => {
        let 
    })
})