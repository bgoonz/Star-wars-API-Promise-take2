const fetch = require("node-fetch");
const fs = require("fs").promises;

const fetchLuke = fetch("https://swapi.dev/api/people/1");
const fetchFilms = fetch("https://swapi.dev/api/people/1");
const fetchLukeHome = fetch("http://swapi.dev/api/planets/1/");

const fetchedLuke = fetchLuke
  .then((lukeResponse) => lukeResponse.json())
  .then((lukeObj) => lukeObj.name)
  .catch((err) => console.error(err));

const fetchedHome = fetchLukeHome
  .then((homeResponse) => homeResponse.json())
  .then((homeObj) => homeObj.name)
  .catch((err) => console.error(err));

const fetchedFilmNames = fetchFilms
  .then((startResponse) => startResponse.json())
  .then((startObj) => startObj.films)
  .then((films) => {
    let filmNames = [];
    for (let i = 0; i < films.length; i++) {
      let film = fetch(films[i]);
      filmNames.push(film.name);
    }
  })
  .catch((err) => console.error(err));

const getInfo = Promise.all([fetchedLuke, fetchedHome, fetchedFilmNames])
  .then(() =>
    console.log(
      `My name is ${fetchedLuke},
      I am from ${fetchedHome},
      and I starred in the following films:
      ${fetchedFilmNames[0]}, ${fetchedFilmNames[1]},
      ${fetchedFilmNames[2]}, ${fetchedFilmNames[3]}`
    )
  )
  .catch((err) => console.error(err));

/* My name is Luke Skywalker, I am from Tatooine
I starred in the following films: A New Hope,
The Empire Strikes Back, Return of the Jedi,
Revenge of the Sith */
