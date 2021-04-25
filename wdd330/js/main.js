const links = [{
    label: "Week 1",
    url: "./W01/w01.md"
},
// {
//     label: "Week 2",
//     url: "../W01/w01.md"
// },
]

const list = document.querySelector("ul");

links.forEach(e => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${e.label}: <a href = ${e.url}>Notes</a>`;
    list.appendChild(listItem);
});