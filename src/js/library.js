import { Report } from 'notiflix/build/notiflix-report-aio';
import { getMoviesById } from './getDataFilm';
import { filmCardMacker } from './film-card';
const btnHome = document.querySelector('.header-nav__title--home');
const btnWatched = document.querySelector('#watched-btn');
const btnQueue = document.querySelector('#queue-btn');
const btnsRefs = document.querySelector('.header-nav__list-2');
const libRef = document.querySelector('.header-nav__title--lib');
const filmList = document.querySelector('.films-list'); // галерея карток з фільмами
const inputSearchEll = document.querySelector('.header-nav__item--input'); // посилання на інпут для вводу ключового слова для пошуку

libRef.addEventListener('click', hendleOpenLib);

function hendleOpenLib(e) {

  if (libRef.classList.contains('header-nav__title--active')) {
    return;
  }
  if (!localStorage.getItem("watchedID") || !localStorage.getItem("queueId")) {
    if (JSON.parse(localStorage.getItem("watchedID")).filter(value => value !== 1) === [] || JSON.parse(localStorage.getItem("queueId")).filter(value => value !== 1) === []) {
      badNews()
      return
    }
    badNews()
    return
  }
  const watchedID = JSON.parse(localStorage.getItem("watchedID")).filter(value => value !== 1)
  console.log(watchedID)
  btnHome.classList.toggle('header-nav__title--active');
  libRef.classList.toggle('header-nav__title--active');
  btnsRefs.classList.toggle('is-hidden');
  inputSearchEll.classList.toggle('is-hidden');
  btnWatched.classList.add('header-nav__title--active')
  btnWatched.setAttribute('data-active', true);
  getMoviesById(watchedID).then(
    res => {
      filmList.innerHTML = filmCardMacker(res);
    })
}

function badNews() {
  Report.info('OOOOOOOOPS',
    '"There is no movies here yet"',
    'Okay');
  inputSearchEll.classList.toggle('is-hidden');
  btnHome.classList.toggle('header-nav__title--active');
  libRef.classList.toggle('header-nav__title--active');
  filmList.innerHTML = '';
  filmList.classList.toggle('library-empty')
}

btnsRefs.addEventListener('click', hendleBtnRefsclick)

function hendleBtnRefsclick({ target }) {
  if (target.dataset.active === 'true') {
    return;
  }
  if (target.dataset.active === 'true') {
    return;
  }

}


