const links = [{
    label: "Week 1",
    url: "./W01/W01Notes.md"
    // Where URL is being plugged into HTML file, path needs to be relative to where 
    // the HTML file is, NOT the js
},
{
    label: "Week 2",
    url: "./W02/W02Notes.md"
},
{
    label: "Week 3",
    url: "./W03/W03Notes.md"
},
{
    label: "Week 4",
    url: "./W04/W04Notes.md"
},
{
    label: "Week 5",
    url: "./W05/W05Notes.md"
},
{
    label: "Week 6",
    url: "./W06/W06Notes.md"
},
]

const list = document.querySelector("ul");

links.forEach(e => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${e.label}: <a href = ${e.url}>Notes</a>`;
    list.appendChild(listItem);
});