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

let centerProductLinks = [];

centersList.forEach(element => {
    let centerURL = `https://www.alphagraphics.com/centers/${element}/products/`;
    //console.log(element);
    productSectionList.forEach(element1 => {
        centerProductLinks.push(centerURL.concat(element1));
    });
});

// ------------------------------------------------------------
// GET ALL PRODUCT LINKS

// NUMBER OF PRODUCTS ON PAGE
// document.querySelector('#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap').children.length

// SELECTOR FOR EACH PRODUCT
// document.querySelector('#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap > div:nth-child(INDEX) > section > a');
let allLinks = [];
async function getProductLinks(centerProductLinks) {
    const browser = await puppeteer.launch();
    let page = await browser.newPage();
    try {
        centerProductLinks.forEach(element => {
            try {
                page.goto(element);
                let productLength = document.querySelector('#content-body-center > div > section > div > div.listing.listing-one > section > div > div.product-list-items-wrap').children.length;
                console.log(element, productLength);

            } catch (error) {
                console.log(`Error: ${element} not a valid page`);
            }
        });
    } catch (error) {
        console.log('Error in loop')
    }
};



// -------------------------------------------------
// OUTPUT RESULTS
//https://stackabuse.com/reading-and-writing-json-files-with-node-js/
async function outputToFile(results) {
    fs.writeFile('results.txt', results, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('Results saved!');
    });
}

getProductLinks(centerProductLinks);

//Export allinks to json