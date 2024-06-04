import fetchDatas from './fetch.js';
import { moviesUrl, genresUrl } from '../assets/urls.js';

let films = await fetchDatas(moviesUrl);
films = films.results;
let genres = await fetchDatas(genresUrl);
genres = genres.genres;
let descriptionElement = document.querySelector('.description');
let imageElement = document.querySelector('.image');
let titleElement = document.querySelector('.title');
let tagsElement = document.querySelector('.tags');
const statContainer = document.createElement('p');
const moviesLength = films.length;
let currentState = 0;

console.log(films.filter((films) => films.vote_average > 7));
/**
 * Generate genre from id
 * @param {number} id
 * @returns {string}
 */
function generateNameById(id) {
  const genre = genres.filter((genre) => genre.id === id);
  return genre[0].name;
}

/**
 * Displaying informations about movies and animate it
 */
const animation = () => {
  // Back to the beginning of the movie list if statement is the last
  if (currentState >= moviesLength) {
    currentState = 0;
  }

  tagsElement.textContent = '';
  imageElement.src = '';
  statContainer.textContent = '';
  imageElement.src =
    'https://image.tmdb.org/t/p/w1280/' + films[currentState].backdrop_path;

  titleElement.textContent = films[currentState].title;

  films[currentState].genre_ids.map((tag, index) => {
    tagsElement.textContent += generateNameById(tag);
    index <= films[currentState].genre_ids.length - 2 &&
      (tagsElement.textContent += ' - ');
  });
  if (films[currentState].vote_average > 7) {
    statContainer.innerHTML = '&#128077; <em>Film dans le top 10</em>';
    statContainer.classList.add('stats');
    descriptionElement.appendChild(statContainer);
  }
  currentState += 1;
  // Loop with this animation
  setTimeout(animation, 15000);
};

animation();
