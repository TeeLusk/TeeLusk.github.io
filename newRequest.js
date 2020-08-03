const puppeteer = require('puppeteer');
const fs = require('fs');


// ------------------------------------------------------------
// CONCAT LINKS
let productSectionList = [
    "print-products.html",
    "marketing-design.html",
    "signs.html"
];

let centersList = [
    "idaho-falls-idaho-us679",
    "rexburg-idaho-us643",
    "lehi-utah-us615",
    "orem-utah-us532",
    "logan-utah-us738",
    "boise-idaho-us796",
    "jackson-wyoming-us691"
];

function concatLinks(sections, centers) {
    let concatLinks = [];
    centers.forEach(element0 => {
        let centerURL = `https://www.alphagraphics.com/centers/${element0}/products/`;
        sections.forEach(element1 => {
            concatLinks.push(centerURL.concat(element1));
        })
    })
    return concatLinks;
}

// ----------------------------------------------------
// SCRAPE PRODUCT PAGES FOR ALL LINKS
async function crawlPage(link) {

    try {
        const browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();
        await page.goto(link);
        await page.waitForSelector('#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap');
        let productLength = await page.$eval('#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap', el => el.children.length);
        await browser.close()
        
        return productLength;
    } catch (err) {
        console.log(err);
    }
}


async function scrapeLinks(links) {
    let resultList = [];
    const browser = await puppeteer.launch({
        headless: false
    });
    let page = await browser.newPage();



    return resultList;
}

let result = crawlPage('https://www.alphagraphics.com/centers/lehi-utah-us615/products/marketing-design.html');
console.log(result);

// let initLinkList = concatLinks(productSectionList, centersList);


// ----------------------------------------------------
//Write to File

// let data = JSON.stringify(initLinkList);
// fs.writeFileSync('linkList.json', data);