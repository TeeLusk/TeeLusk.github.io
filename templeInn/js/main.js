// ----------------------------------------
// RESPONSIVE MENU
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);


// ----------------------------------------
// CURRENT WEATHER FETCH






// ----------------------------------------
// TEMPLES
if (document.getElementById('templesPage')) {
const templeRequest = './js/templeData.json';

fetch(templeRequest)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error with inital response')
    })
    .then(function (jsonObject) {
        const templeList = jsonObject['temples'];
        // console.log(templeList);

        templeList.forEach(element => {
            let div = document.createElement('div');
            div.className = "row";
            let flexSection = document.createElement('div');
            let textSection = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let address = document.createElement('ul');
            let milestones = document.createElement('ul');
            let services = document.createElement('ul');
            let email = document.createElement('p');
            let phone = document.createElement('p');
            let notice = document.createElement('p');
            let link = document.createElement('p');

            address.innerHTML = '<h3>Contact Information</h3>';
            milestones.innerHTML = '<h3>Milestones</h3>';
            services.innerHTML = '<h3>Services</h3>';

            img.src = element.photo;
            h2.textContent = element.name;
            email.textContent = element.email;
            phone.textContent = element.telephone;
            notice.textContent = element.notice;
            link.innerHTML = '<p>For additional information please visit the Church\'s Wesbite page <a href="' + element.link +'">here</a></p>'

            //Address
            element.address.forEach(element => {
                address.innerHTML += '<li>' + element + '</li>';
            });

            //Milestones
            element.milestones.forEach(element => {
                milestones.innerHTML += '<li>' + element + '</li>';
            });

            //Services
            element.services.forEach(element => {
                services.innerHTML += '<li>' + element + '</li>';
            });



            textSection.appendChild(address);
            textSection.appendChild(phone);            
            textSection.appendChild(email);
            textSection.appendChild(services);            
            textSection.appendChild(milestones);
            textSection.appendChild(notice);
            textSection.appendChild(link);

            flexSection.appendChild(img);
            flexSection.appendChild(textSection);

            div.appendChild(h2);
            div.appendChild(flexSection);

            document.getElementById('templesPage').appendChild(div);

        });

    })
}