//RESUELVE TUS EJERCICIOS AQUI

//Ejercicio 1

function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list')
        .then((response) => response.json())
        .then((data) => data.message)

    }
console.log(getAllBreeds());

//Ejercicio 2
 function getRandomDog(_breed) {
    return fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((data) => data.message)

    }
console.log(getRandomDog());

//Ejercicio 3

function getAllImagesByBreed () {
    return fetch(`https://dog.ceo/api/breed/komondor/images`)
        .then((response) => response.json())
        .then((data) => data.message)

    }
console.log(getAllImagesByBreed());

//Ejercicio 4
let breed = 'komondor';
function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then((response) => response.json())
        .then((data) => data.message)
        
    }
console.log(getAllImagesByBreed2('komondor'));

//Ejercicio 5
let _username = 'alenriquez96';
function getGitHubUserProfile(_username) {
    return fetch('https://api.github.com/users/alenriquez96')
        .then((response) => response.json())
        .then((data) => data);
        
}
console.log(getGitHubUserProfile('_username'));

//Ejercicio 6
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            const userProfile = {
                img: data.avatar_url,
                name: data.name
            };
            const imgElement = document.createElement('img');
            const nameElement = document.createElement('p');
            imgElement.src = userProfile.img;
            nameElement.textContent = userProfile.name;
            document.body.appendChild(imgElement);
            document.body.appendChild(nameElement);
            return userProfile;
        });
}

printGithubUserProfile('alenriquez96');

//Ejercicio 7
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            return `
                <section>
                    <img src="${data.avatar_url}" alt="${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>
            `;
        });
}



// ejercicio 9

/* async function fetchGithubUsers(userNames) {
    const fetchWithTimeout = (url, timeout = 4000) => {
        return Promise.race([
            fetch(url).then(res => res.ok ? res.json() : Promise.reject(`Error fetching ${url}`)),
            new Promise((_, reject) => setTimeout(() => reject('Request timed out'), timeout))
        ]);
    };

    try {
        const userPromises = userNames.map(name => 
            fetchWithTimeout(`https://api.github.com/users/${name}`)
                .then(user => ({ name: user.name || 'No name available', url: user.html_url }))
                .catch(error => {
                    console.error(`Error with ${name}:`, error);
                    return null;
                })
        );

        const users = await Promise.all(userPromises);
        return users.filter(user => user !== null);

    } catch (error) {
        console.error('General error:', error);
        return [];
    }
}

// Uso de la función
fetchGithubUsers(['alenriquez96', 'octocat', 'torvalds'])
    .then(console.log);
*/


