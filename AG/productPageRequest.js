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
    const browser = await puppeteer.launch();
    let resultList = [];
    try {


        let page = await browser.newPage();
        await page.goto(link);

        let pageLengthSel = '#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap'


        let numProducts = await page.$eval(pageLengthSel, e => e.children.length);
        console.log(numProducts);

        for (let i = 1; i < numProducts + 1; i++) {
            let sel = '#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap > div:nth-child(INDEX) > section > a';
            sel = sel.replace('INDEX', i)
            resultList[i - 1] = await page.$eval(sel, e => e.href);
        }



    } catch (err) {
        console.log(err);
    }

    await browser.close();
    return resultList;
}

let allproductPages = []
let concat = concatLinks(productSectionList, centersList);
concat.forEach(element => {
    let productLinks = crawlPage(element);
    productLinks.then(function (result) {
        allproductPages.push(result);
    }).then(() => {
        let data = JSON.stringify(allproductPages);
        fs.writeFileSync('allProductPages.json', data);
    })
});