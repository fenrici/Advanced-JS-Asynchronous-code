//RESUELVE TUS EJERCICIOS AQUI

//Ejercicio 1

function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list')
        .then(response => response.json())
        .then(data => data.message)
        .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }
    getAllBreeds().then(data => console.log(data))
   

//Ejercicio 2
 function getRandomDog(_breed) {
    return fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => response.json())
        .then(data => data.message)
        .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }
console.log(getRandomDog());

//Ejercicio 3

function getAllImagesByBreed () {
    return fetch(`https://dog.ceo/api/breed/komondor/images`)
        .then(response => response.json())
        .then(data => data.message)
        .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }
console.log(getAllImagesByBreed());

//Ejercicio 4

function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then((response) => response.json())
        .then((data) => data.message)
        .catch((error) => {
            console.error("Error fetching data:", error);
          }); 
    }
console.log(getAllImagesByBreed2('komondor'));

//Ejercicio 5

function getGitHubUserProfile(username) {
    console.log(username)
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error("Error fetching data:", error);
          }); 
  }
  getGitHubUserProfile('alenriquez96').then(data => console.log(data));
  
  //Ejercicio 6
  function printGithubUserProfile(username) {
  
      return getGitHubUserProfile(username)
            .then( data => {
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
  
              return userProfile; // Objeto devuelto
          })
          .catch(error => {
            console.error("Error fetching user:", error);
          });
  }
  
  printGithubUserProfile('alenriquez96').then(data => {
    console.log("***********");
    console.log(data)
  });

printGithubUserProfile('alenriquez96').then(data => console.log(data))

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
getAndPrintGitHubUserProfile('alenriquez96').then(data => console.log(data));
// Ejercicio 9

