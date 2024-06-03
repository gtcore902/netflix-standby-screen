import fetchDatas from './fetch.js';
import genres from '../assets/genres.js';

const films = await fetchDatas();
console.log(films);
// const films = [
//   {
//     url: 'https://media.gqmagazine.fr/photos/622617a15f69a13708143038/16:9/w_1600,h_899,c_limit/avatar%20cover%202.jpg',
//     title: 'Avatar',
//     tags: ['Aventure', 'SF'],
//   },
//   {
//     url: 'https://media.ouest-france.fr/v1/pictures/fea25c37890f0cc1e7fdb5e44b19cb84-4386325.jpg?width=1260&client_id=eds&sign=47e41a421c7e7f71c8d072d6ef716b7cc7d06896cf2f53bf4bbfd262cae94a7e',
//     title: 'Harry Potter',
//     tags: ['SF'],
//   },
//   {
//     url: 'https://images.affiches-et-posters.com//albums/3/3901/medium/affiche-film-sinister-paysage--1716.jpg',
//     title: 'Sinister',
//     tags: ['SF', 'Horreur'],
//   },
// ];

function generateNameById(id) {
  const genre = genres.filter((genre) => genre.id === id);
  return genre[0].name;
}

console.log(
  genres.map((genre, key) => {
    genre.id === 37;
  })
);

const moviesLength = films.length;
let currentState = 0;
console.log(moviesLength);

let imageElement = document.querySelector('.image');
let titleElement = document.querySelector('.title');
let tagsElement = document.querySelector('.tags');

const animation = () => {
  if (currentState >= moviesLength) {
    currentState = 0;
  }
  tagsElement.textContent = '';
  imageElement.src = '';
  //   imageElement.src = films[currentState].url;
  imageElement.src =
    'https://image.tmdb.org/t/p/w1280/' + films[currentState].backdrop_path;
  titleElement.textContent = films[currentState].title;
  films[currentState].genre_ids.map((tag, index) => {
    tagsElement.textContent += generateNameById(tag);
    index <= films[currentState].genre_ids.length - 2 &&
      (tagsElement.textContent += ' - ');
  });
  currentState += 1;
  setTimeout(animation, 15000);
};

animation();
