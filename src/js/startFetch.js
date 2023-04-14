import { getDataFilm } from './getDataFilm';
import { filmCardMacker } from './film-card';
const filmList = document.querySelector('.films-list') // галерея карток з фільмами
import ApiRequest from './ApiRequest'

getDataFilm(ApiRequest.popularFilm, { language: 'en-US' }).then(({ results }) => {// запит по трендам + запит на вставку карток у films-list
    console.log(results)
    filmList.innerHTML = filmCardMacker(results);
    return
})

const inputSearchEll = document.querySelector('.header-nav__input'); // посилання на інпут для вводу ключового слова для пошуку
console.log('inputSearchEll----',inputSearchEll);


let timeoutId;
inputSearchEll.addEventListener('input', function() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function() {
    // викликати функцію, яку потрібно запустити
       const querySearch = inputSearchEll.value.trim();
    console.log('querySearch ---', querySearch, querySearch.length);
    if (querySearch.length === 0) {
       console.log("введіть текст для пошуку кінофільмів") 
    }

getDataFilm(ApiRequest.searchMovie, { query: querySearch }).then(({ results }) => {// запит по трендам + запит на вставку карток у films-list
    console.log(results)
     if (results.length === 0) {
         console.log("кінофільмів згідно вашого запиту немає") 
         return
    }
    filmList.innerHTML = filmCardMacker(results);
    return
})
     
      
    console.log('Текст був введений більше ніж 2 секунди тому.');
  }, 2000);
}); 


// const searchBtn = document.querySelector('.search__icon'); // посилання на кнопку для пошуку
// console.log('searchBtn', searchBtn);
// searchBtn.addEventListener('click', function (event) {
//     const querySearch = inputSearchEll.value.trim();
//     console.log('querySearch ---', querySearch, querySearch.length);
//     if (querySearch.length === 0) {
//        console.log("введіть текст для пошуку кінофільмів") 
//     }

// getDataFilm(ApiRequest.searchMovie, { query: querySearch }).then(({ results }) => {// запит по трендам + запит на вставку карток у films-list
//     console.log(results)
//      if (results.length === 0) {
//          console.log("кінофільмів згідно вашого запиту немає") 
//          return
//     }
//     filmList.innerHTML = filmCardMacker(results);
//     return
// })
// })

