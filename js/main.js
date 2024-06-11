import fetchDatas from './fetch.js';
import { moviesUrl, genresUrl } from '../assets/urls.js';

let films = await fetchDatas(moviesUrl);
films = films.results;
let genres = await fetchDatas(genresUrl);
genres = genres.genres;
let descriptionElement = document.querySelector('.content__description');
let imageElement = document.querySelector('.image');
let titleElement = document.querySelector('.title');
let tagsElement = document.querySelector('.tags');
const thumb = document.createElement('div');
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
 * Generate top film content
 */
const topFilmContent = () => {
  const thumbText = document.createElement('span');
  const thumbDetail = document.createElement('span');
  const thumbStats = document.createElement('span');
  const thumbLogo = document.createElement('span');
  thumb.classList.add('thumb');
  thumbText.classList.add('thumb__element');
  thumbText.classList.add('thumb__element--text');
  thumbStats.classList.add('thumb__element');
  thumbStats.classList.add('thumb__element--stats');
  thumbDetail.classList.add('thumb__element');
  thumbDetail.classList.add('thumb__element--detail');
  thumbText.innerHTML = '&#128077;';
  thumbDetail.innerHTML = 'Parmi les plus aimés - ';
  thumbStats.innerHTML = 'Un des films ayant reçu le plus de pouces levés.';
  thumb.appendChild(thumbText);
  thumb.appendChild(thumbDetail);
  thumb.appendChild(thumbStats);
  descriptionElement.appendChild(thumb);
  return descriptionElement;
};
/**
 * Displaying informations about movies and animate it
 */
const animation = () => {
  // Back to the beginning of the movie list if statement is the last
  if (currentState >= moviesLength) {
    currentState = 0;
  }
  thumb.innerHTML = '';
  tagsElement.textContent = '';
  imageElement.src = '';
  imageElement.src =
    'https://image.tmdb.org/t/p/w1280/' + films[currentState].backdrop_path;

  titleElement.textContent = films[currentState].title;

  films[currentState].genre_ids.map((tag, index) => {
    tagsElement.textContent += generateNameById(tag);
    index <= films[currentState].genre_ids.length - 2 &&
      (tagsElement.textContent += ' - ');
  });
  if (films[currentState].vote_average > 1) {
    statContainer.innerHTML = '&#128077; Parmi les plus aimés';
    statContainer.classList.add('stats');
    topFilmContent();
  }
  currentState += 1;
  console.log(currentState);
  // Loop with this animation
  setTimeout(animation, 15000);
};

animation();
