// ----------------------------------------
// RESPONSIVE MENU
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

//-----------------------------------------
//SCROLL TO TOP
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
                div.id = `${element.id}`;
                let flexSection = document.createElement('div');
                flexSection.className = 'width-wrapper';
                let textSection = document.createElement('div');
                textSection.className = 'textSection';
                let img = document.createElement('img');
                let h2 = document.createElement('h2');
                let address = document.createElement('ul');
                let milestones = document.createElement('ul');
                let services = document.createElement('ul');
                let email = document.createElement('p');
                let phone = document.createElement('p');
                let notice = document.createElement('p');
                notice.className = "noticeText";
                let link = document.createElement('p');
                let weather = document.createElement('p');
                let button = document.createElement('button');
                button.classname = 'topButton';

                address.innerHTML = '<h3>Contact Information</h3>';
                milestones.innerHTML = '<h3>Milestones</h3>';
                services.innerHTML = '<h3>Services</h3>';

                button.setAttribute("onclick", "topFunction()");
                button.innerText = 'Back to top';

                img.src = element.photo;
                img.setAttribute('alt', `${element.name} Temple`);
                h2.textContent = element.name;
                email.textContent = element.email;
                phone.textContent = element.telephone;
                notice.textContent = element.notice;
                link.innerHTML = '<p>For additional information please visit the Church\'s Wesbite page <a href="' + element.link + '">here</a></p>'

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

                // ----------------------------------------
                // CURRENT WEATHER FETCH
                const currentURL = `https://api.openweathermap.org/data/2.5/weather?id=${element.cityID}&units=imperial&appid=4447a91324b56ff7dc35262e118be15a`;
                fetch(currentURL)
                    .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        }
                        throw new ERROR('Network response was not ok');
                    })
                    .then(function (jsonObject) {
                        const weatherCurrent = jsonObject;

                        let currentCondition = weatherCurrent.weather[0].main;
                        let currentTemp = weatherCurrent.main.temp;

                        weather.innerHTML = '<h3>Current Weather Conditions</h3><p>' + currentCondition + ', ' + currentTemp + '&deg; F</p>';

                    })
                    .catch(function (error) {
                        console.log('Fetch error: ', error.message);
                    });

                //--------------------------------------------
                // APPEND CHILDREN
                div.appendChild(h2);
                flexSection.appendChild(img);

                textSection.appendChild(address);
                textSection.appendChild(phone);
                textSection.appendChild(email);

                flexSection.appendChild(textSection);
                div.appendChild(flexSection);


                div.appendChild(weather);
                div.appendChild(services);
                div.appendChild(milestones);
                div.appendChild(notice);
                div.appendChild(link);
                div.appendChild(button);

                document.getElementById('templesPage').appendChild(div);
            });

        })
}