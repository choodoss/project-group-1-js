import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix';
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
  filmList.innerHTML = '';
  const watchedID = JSON.parse(localStorage.getItem("watchedID")).filter(value => value !== 1)
  console.log(watchedID)
  btnHome.classList.toggle('header-nav__title--active');
  libRef.classList.toggle('header-nav__title--active');
  btnsRefs.classList.toggle('is-hidden');
  inputSearchEll.classList.toggle('is-hidden');
  btnWatched.classList.add('header-nav__title--active')
  btnWatched.dataset.active = true;
  getMoviesById(watchedID).then(
    res => {
      console.log(res)
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

// window.addEventListener('storage', function (event) {
//   // Перевіряємо, який ключ змінився
//   if (event.key === 'queue-btn') {
//     forQueue()
//   }
//   if (event.key === 'watched-btn') {
//     forWatched()
//   }
// });

btnsRefs.addEventListener('click', hendleBtnRefsclick)

function forWatched() {
  const watchedID = JSON.parse(localStorage.getItem("watchedID")).filter(value => value !== 1)
  filmList.innerHTML = '';
  btnWatched.classList.add('header-nav__title--active');
  btnQueue.classList.remove('header-nav__title--active');
  if (watchedID.length === 0) {
    Notify.failure("You haven't added anything to the watched yet")
    return;
  }
  getMoviesById(watchedID).then(
    res => {
      filmList.innerHTML = filmCardMacker(res);
    })
  return;
}

function forQueue() {
  const queueId = JSON.parse(localStorage.getItem("queueId")).filter(value => value !== 1)
  filmList.innerHTML = '';
  btnWatched.classList.remove('header-nav__title--active');
  btnQueue.classList.add('header-nav__title--active');
  if (queueId.length === 0) {
    Notify.failure("You haven't added anything to the queue yet")
    return;
  }
  getMoviesById(queueId).then(
    res => {
      console.log(res)
      filmList.innerHTML = filmCardMacker(res);
    })
  return;
}

function hendleBtnRefsclick({ target }) {
  if (target.dataset.active === 'true') {
    return;
  }
  if (target.id === 'watched-btn') {
    target.dataset.active = true;
    btnQueue.dataset.active = false;
    forWatched()
  }
  if (target.id === 'queue-btn') {
    console.log(target.id)
    target.dataset.active = true;
    btnWatched.dataset.active = false;
    console.log(target.dataset.active)
    forQueue()
  }
}




