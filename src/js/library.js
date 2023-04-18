import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix';
import { getMoviesById } from './getDataFilm';
import { filmCardMacker } from './film-card';
import { DatabaseAPI } from './Firebase-storage';

const DatabaseAPIstorage = new DatabaseAPI;

const btnHome = document.querySelector('.header-nav__title--home');
const btnWatched = document.querySelector('#watched-btn');
const btnQueue = document.querySelector('#queue-btn');
const btnsRefs = document.querySelector('.header-nav__list-2');
const libRef = document.querySelector('.header-nav__title--lib');
const filmList = document.querySelector('.films-list'); // галерея карток з фільмами
const inputSearchEll = document.querySelector('.header-nav__item--input'); // посилання на інпут для вводу ключового слова для пошуку

libRef.addEventListener('click', hendleOpenLib);

async function hendleOpenLib(e) {
  const watchedList = await DatabaseAPIstorage.getWatchedList();
  const queuedList = await DatabaseAPIstorage.getQueueList();
  if (libRef.classList.contains('header-nav__title--active')) {
    return;
  }

  if (watchedList.length === 0 && queuedList.length === 0) {
    badNews()
    return
  }

  filmList.innerHTML = '';
  const watchedID = watchedList
  console.log(watchedID)
  btnHome.classList.toggle('header-nav__title--active');
  libRef.classList.toggle('header-nav__title--active');
  btnsRefs.classList.toggle('is-hidden');
  inputSearchEll.classList.toggle('is-hidden');
  btnWatched.classList.add('header-nav__title--active')
  btnWatched.dataset.active = true;
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

export async function forWatched() {
  const watchedList = await DatabaseAPIstorage.getWatchedList();
  const watchedID = watchedList;
  filmList.innerHTML = '';
  if (watchedID.length === 0) {
    Notify.failure("You haven't added anything to the watched yet")
    return;
  }
  await getMoviesById(watchedID).then(
    res => {
      filmList.innerHTML = filmCardMacker(res);
    })
  return;
}

export async function forQueue() {
  const queueId = await DatabaseAPIstorage.getQueueList();
  filmList.innerHTML = '';
  if (queueId.length === 0) {
    Notify.failure("You haven't added anything to the queue yet")
    return;
  }
  await getMoviesById(queueId).then(
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
    target.dataset.active = true;
    btnWatched.dataset.active = false;
    forQueue()
  }
}




