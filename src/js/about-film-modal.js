import { getDataFilm } from './getDataFilm';
import ApiRequest from './ApiRequest';
import { DatabaseAPI } from './Firebase-storage';
import { forWatched, forQueue } from './library'
const DatabaseAPIstorage = new DatabaseAPI;
const libRef = document.querySelector('.header-nav__title--lib');

let watchedBtn;
let queueBtn;

// if (!localStorage.getItem("watchedID") || !localStorage.getItem("queueId")) {
//   localStorage.setItem(("watchedID"), JSON.stringify([1]))
//   localStorage.setItem(("queueId"), JSON.stringify([1]))
// }


export async function cardFilmMacker({ id, poster, genres, title, original, popularity, average, count }) {
  const filmcard = document.querySelector('.about-film');

  try {
    const { overview } = await getDataFilm(`${ApiRequest.movieDetails}${id}`, { language: 'en-US' });
    const videos = await getDataFilm(`${ApiRequest.movieDetails}${id}/videos`, { language: 'en-US' });
    const watchedList = await DatabaseAPIstorage.getWatchedList();
    const queuedList = await DatabaseAPIstorage.getQueueList();
    const trailer = `https://www.youtube.com/watch?v=${videos.results[0].key}`;

    // const localStorageDataWatch = JSON.parse(localStorage.getItem("watchedID"))
    // const localStorageDataQueue = JSON.parse(localStorage.getItem("queueId"))
    let watchedTextBt;
    let queueTextBt;

    // if (localStorageDataWatch.includes(id)) {
    //   watchedTextBt = 'remove at Watched';
    // }
    // if (localStorageDataQueue.includes(id)) {
    //   queueTextBt = 'remove at queue';
    // }

    if (watchedList.includes(id)) {
      watchedTextBt = 'remove at Watched';
    }
    if (queuedList.includes(id)) {
      queueTextBt = 'remove at queue';
    }


    filmcard.innerHTML = `
      <img class="about-film__img" src="${poster}" />
      <div class="about-film__body">
        <h3 class="film__title">${title}</h3>
        <div class="film-atributes">
          <ul class="film-properties">
            <li class="film-properties__item">
              <p class="property">Vote / Votes</p>
            </li>
            <li class="film-properties__item">
              <p class="property">Popularity</p>
            </li>
            <li class="film-properties__item">
              <p class="property">Original Title</p>
            </li>
            <li class="film-properties__item">
              <p class="property">Genre</p>
            </li>
          </ul>
          <ul class="film-value">
            <li class="film-value__item">
              <p class="value">
                <span class="value--red">${average}</span><span class="value--gray"> / </span>
                <span class="value--gray-bg">${count}</span>
              </p>
            </li>
            <li class="film-value__item">
              <p class="value">${popularity}</p>
            </li>
            <li class="film-value__item">
              <p class="value">${original}</p>
            </li>
            <li class="film-value__item">
              <p class="value">${genres}</p>
            </li>
          </ul>
        </div>
        <div class="about-film__description">
          <h4 class="description__title">About</h4>
          <p class="description">${overview}</p>
        </div>
        <div class="youtube-container">
          <a href="${trailer}" class="youtube-link tube" data-modal-close>Trailer</a>
        </div>
        <div class="button__wrapper" id="buttonWrapper">
  <button data-id="${id}" class="add-to-watched" type="button" data-value="${watchedTextBt ? 'add' : 'no'}" id="btn-watched">
    ${watchedTextBt ? watchedTextBt : 'add to Watched'}
  </button>
  <button data-id="${id}" class="add-to-queue" type="button" data-value="${queueTextBt ? 'add' : 'no'}" id="btn-queue">
    ${queueTextBt ? queueTextBt : 'add to queue'}
  </button>
                </div>
            </div>`
    watchedBtn = document.querySelector('#btn-watched');
    queueBtn = document.querySelector('#btn-queue');
    watchedBtn.addEventListener('click', hendleWatchedBtn);
    queueBtn.addEventListener('click', hendleQueueBtn);
  } catch (error) {
    console.log(error)
  }
}


async function hendleWatchedBtn({ target }) {

  const add = "add"
  const no = "no"
  const id = target.dataset.id;

  if (target.dataset.value === add) {
    DatabaseAPIstorage.removeMovieFromWatched(id)
    // const arrWithOutId = JSON.parse(localStorage.getItem("watchedID")).filter(value => value !== id && value !== 1);
    // localStorage.setItem(("watchedID"), JSON.stringify(arrWithOutId));
    target.textContent = 'add to Watched';
    target.dataset.value = 'no';
    if (libRef.classList.contains('header-nav__title--active')) {
      await forWatched();
    }
  } else {
    DatabaseAPIstorage.addToWatched(id)
    // let arrAllId = [];
    // JSON.parse(localStorage.getItem("watchedID")).map(i => arrAllId.push(i));
    // arrAllId.push(id);
    // localStorage.setItem(("watchedID"), JSON.stringify(arrAllId));
    target.textContent = 'remove at Watched';
    target.dataset.value = 'add';
  }
}

async function hendleQueueBtn({ target }) {
  const add = "add"
  const no = "no"
  const id = target.dataset.id;

  if (target.dataset.value === add) {
    DatabaseAPIstorage.removeMovieFromQueue(id)
    // const arrWithOutId = JSON.parse(localStorage.getItem("queueId")).filter(value => value !== id && value !== 1);
    // localStorage.setItem(("queueId"), JSON.stringify(arrWithOutId));
    target.textContent = 'add to queue';
    target.dataset.value = 'no';

    if (libRef.classList.contains('header-nav__title--active')) {
      await forQueue();
    }
  } else {
    DatabaseAPIstorage.addToQueue(id)
    // let arrAllId = [];
    // JSON.parse(localStorage.getItem("queueId")).map(i => arrAllId.push(i));
    // arrAllId.push(id);
    // localStorage.setItem(("queueId"), JSON.stringify(arrAllId));
    target.textContent = 'remove at queue';
    target.dataset.value = 'add';

  }
}
