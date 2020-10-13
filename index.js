const fetch = require("node-fetch");
const fs = require("fs").promises;

const fetchLuke = fetch("https://swapi.dev/api/people/1");

// fetchLuke
//     .then((response) => response.json())
//     .then((person) => console.log(person))
//     .catch((err) => console.error(err));

fetchLuke
    .then((response) => response.json())
    .then((person) => fetch(person.homeworld))
    .then((response2) => response2.json())
    .then((homeworld) => console.log(homeworld.name))



const fetchLukeHome = fetch("http://swapi.dev/api/planets/1/");

fetchLukeHome
    .then((response) => response.json())
    .then((person) => console.log(person))
    .catch((err) => console.error(err));

// const fetchLuckFilm = fetch[
//     'http://swapi.dev/api/films/1/',
//     'http://swapi.dev/api/films/2/',
//     'http://swapi.dev/api/films/3/',
//     'http://swapi.dev/api/films/6/'
// ]



// .then(()=> {})

fs.writeFile("fileName.txt", contents, "utf-8")
    .then(() => console.log("File has been written sucessfully!"))
    .catch(() => console.log("File was not written"));
