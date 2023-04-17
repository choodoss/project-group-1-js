import { getDataFilm } from './getDataFilm';
import ApiRequest from './ApiRequest';

let watchedBtn;
let queueBtn;

if (!localStorage.getItem("watchedID")) {
  localStorage.setItem(("watchedID"), JSON.stringify([1]))
}


export async function cardFilmMacker({ id, poster, genres, title, original, popularity, average, count }) {
  const filmcard = document.querySelector('.about-film');

  try {
    const { overview } = await getDataFilm(`${ApiRequest.movieDetails}${id}`, { language: 'en-US' });
    const videos = await getDataFilm(`${ApiRequest.movieDetails}${id}/videos`, { language: 'en-US' });
    const trailer = `https://www.youtube.com/watch?v=${videos.results[0].key}`;

    const localStorageData = JSON.parse(localStorage.getItem("watchedID"))
    let watchedTextBt;
    if (localStorageData.includes(id)) {
      watchedTextBt = 'remove at Watched';
    }
    console.log(watchedTextBt)
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
        <div class="button__wraper" id="buttonWrapper">
          <button data-id=${id} class="add-to-watched type="button" ${watchedTextBt ? `data-value="add"` : `data-value="no"`} id="btn-watched" >
            ${watchedTextBt ? watchedTextBt : 'add to Watched'}
          </button>
          <button class="add-to-queue" data-id=${id} type="button" id="btn-queue" data-value="add">
            add to queue
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


function hendleWatchedBtn({ target }) {

  const add = "add"
  const no = "no"
  const id = target.dataset.id;
  console.log(target.dataset.value)
  if (target.dataset.value === add) {
    console.log('if')
    const arrWithOutId = JSON.parse(localStorage.getItem("watchedID")).filter(value => value !== id);
    localStorage.setItem(("watchedID"), JSON.stringify(arrWithOutId));
    console.log(arrWithOutId);
    target.textContent = 'add to Watched';
    target.dataset.value = 'no';
    console.log(JSON.parse(localStorage.getItem("watchedID")))
  } else {
    console.log('else')
    let arrAllId = [];
    JSON.parse(localStorage.getItem("watchedID")).map(i => arrAllId.push(i));
    arrAllId.push(id);
    localStorage.setItem(("watchedID"), JSON.stringify(arrAllId));
    target.textContent = 'remove at Watched';
    target.dataset.value = 'add';
    console.log(arrAllId);
  }
}


//перевірка фільму по ІД через масив даних, тимчасово буде на колахості.
//додавання класу
//текст контент 
//первірка до мейкапу і +перевірка коли вона зміналася через іннер текст
//додати у масив даних


function hendleQueueBtn(e) {
  console.log(e.target)
}
