import { getDataFilm } from './getDataFilm';
import { filmCardMacker } from './film-card';
const filmList = document.querySelector('.films-list'); // галерея карток з фільмами
import ApiRequest from './ApiRequest';
import { Notify } from 'notiflix';
import { displayPagination } from './pagination';
import { goPagination } from './pagination';


// currentCollection:
// Назва колекції за ключовим словом - currentSearchMovieCollection
// або
// Назва колекції популярних фільмів - topFilmsCollection
let currentCollection = 'topFilmsCollection'; // назва колекції по дефолту
let activePageCollection = 1; // номер активної сторінки по дефолту
let querySearch = ''; // параметр для пошуку


getDataFilm(ApiRequest.popularFilm, { language: 'en-US' })
  .then(res => {

    filmList.innerHTML = filmCardMacker(res.results);
   
    
    return 
  }
  );

const inputSearchEll = document.querySelector('.header-nav__input'); // посилання на інпут для вводу ключового слова для пошуку

const messageErrorEll = document.querySelector('.header-error-text'); // посилання на абзац з повідомленням щодо невдалого пошуку

let timeoutId;
inputSearchEll.addEventListener('input', function () {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    // викликати функцію, яку потрібно запустити
    querySearch = inputSearchEll.value.trim();
    console.log('querySearch ---', querySearch, querySearch.length);
    if (querySearch.length === 0) {
      clearTimeout(timeoutId);
      return Notify.info('введіть текст для пошуку кінофільмів');
    }

    getDataFilm(ApiRequest.searchMovie, { query: querySearch }).then(
      ({ total_pages, results }) => {
        // запит по трендам + запит на вставку карток у films-list
        console.log(results);
        if (results.length === 0) {
          clearTimeout(timeoutId)
          messageErrorEll.classList.remove("visually-hidden");
          return;
        }
        filmList.classList.add('currentSearchMovieCollection')
        filmList.innerHTML = filmCardMacker(results);
    
        messageErrorEll.classList.add("visually-hidden");
         pageCount = total_pages;
    if (pageCount > 1000) pageCount = 1000
    console.log('pageCount     -----++', total_pages)
    console.log('pageCount     -----++', pageCount)
        displayPagination(1, pageCount);
        goPagination(1, pageCount)
        return ;
      }
    );

    console.log('Текст був введений більше ніж 2 секунди тому.');
  }, 1500);
});

//При переході на кожну сторінку малювати відповідну частину фільмів

// const activePagePaginationEll = document.querySelector('.active'); // посилання на активну сторінку пагінації
// console.log(activePagePaginationEll);
// // activePageCollection = Number(activePagePaginationEll.textContent);

// activePagePaginationEll.addEventListener('click', function (e) {
//   switch (currentCollection) {
//     case 'topFilmsCollection':
//       getDataFilm(ApiRequest.popularFilm, {
//         language: 'en-US',
//         page: activePageCollection,
//       }).then(({ results }) => {
//         // запит по трендам + запит на вставку карток у films-list
//         console.log(results);

//         filmList.innerHTML = filmCardMacker(results);
//         return;
//       });
//       break;
//     case 'currentSearchMovieCollection':
//       getDataFilm(ApiRequest.searchMovie, {
//         query: querySearch,
//         page: activePageCollection,
//       }).then(({ results }) => {
//         // запит по трендам + запит на вставку карток у films-list
//         console.log(results);
//         filmList.innerHTML = filmCardMacker(results);
//         return;
//       });
//       break;

//     default:
//       console.log('Упс, щось пішло не так');
//       break;
//   }
// });


