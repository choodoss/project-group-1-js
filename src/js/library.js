import { Report } from 'notiflix/build/notiflix-report-aio';
const btnHome = document.querySelector('.header-nav__title--home');
const btnWatched = document.querySelector('.button--watched');
const btnQueue = document.querySelector('.button--queue');
const btnsRefs = document.querySelector('.header-nav__list-2');
const libRef = document.querySelector('.header-nav__title--lib')
const filmList = document.querySelector('.films-list') // галерея карток з фільмами
const inputSearchEll = document.querySelector('.header-nav__item--input'); // посилання на інпут для вводу ключового слова для пошуку

libRef.addEventListener('click', hemdleOpenLib)

function hemdleOpenLib(e) {
  if (libRef.classList.contains('header-nav__title--active')) {
    return;
  }
  
  btnsRefs.classList.toggle('is-hidden');
  btnHome.classList.toggle('header-nav__title--active');
  libRef.classList.toggle('header-nav__title--active');
  filmList.innerHTML = '';
  filmList.classList.toggle('library-empty')
  inputSearchEll.classList.toggle('is-hidden');
  Report.info('OOOOOOOOPS',
    '"There is no movies here yet"',
    'Okay');
}


