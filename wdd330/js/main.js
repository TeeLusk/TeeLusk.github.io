const links = [{
    label: "Week 1",
    url: "./W01/w01.md"
    // Where URL is being plugged into HTML file, path needs to be relative to where 
    // the HTML file is, NOT the js
},
// {
//     label: "Week 2",
//     url: "./W02/w02.md"
// },
]

const list = document.querySelector("ul");

links.forEach(e => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${e.label}: <a href = ${e.url}>Notes</a>`;
    list.appendChild(listItem);
});