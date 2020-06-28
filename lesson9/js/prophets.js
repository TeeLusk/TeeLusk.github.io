const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function (jsonObject) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let dateOfBirth = document.createElement('p');
            let placeOfBirth = document.createElement('p');
            let dateOfDeath = document.createElement('p');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            dateOfBirth.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            placeOfBirth.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            dateOfDeath.textContent = 'Date of Death: ' + prophets[i].death;

            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', `${prophets[i].name + ' ' + prophets[i].lastname} - ${i+1}`);



            card.appendChild(h2);
            card.appendChild(image);
            card.appendChild(dateOfBirth);
            card.appendChild(placeOfBirth);
            card.appendChild(dateOfDeath);

            document.querySelector('div.cards').appendChild(card);
            
        }

        //Foreach specifc to arrays
        
        //For...in meant for objects
        // for (const key in object) {
        //     if (object.hasOwnProperty(key)) {
        //         const element = object[key];
                
        //     }
        // }


    })
    .catch(function (error) {
        console.log('Fetch error: ', error.message);
    })

    