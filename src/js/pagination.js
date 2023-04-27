import Pagination from 'tui-pagination';
import { getDataFilm } from './getDataFilm';
import ApiRequest from './ApiRequest';
import { filmCardMacker } from './film-card';
const filmList = document.querySelector('.films-list');

// const pagination = new Pagination('pagination', {
//   totalItems: 1000,
//   itemsPerPage: 20,
//   visiblePages: 7,


// });

// pagination.on('beforeMove', function (eventData) {
//   getDataFilm(ApiRequest.popularFilm, {
//     language: 'en-US',
//     page: eventData.page,
//   })
//     .then(({ results }) => {
//       filmList.innerHTML = filmCardMacker(results);
//       currentCollection = 'topFilmsCollection';
//       return;
//     });
// });
// pagination.on('beforeMove', function (eventData) {
//   getDataFilm(ApiRequest.searchMovie, { query: querySearch, page: eventData.page }).then(
//     ({ results }) => {
//       // запит по трендам + запит на вставку карток у films-list
//       console.log(results);
//       if (results.length === 0) {
//         clearTimeout(timeoutId)
//         messageErrorEll.classList.remove("visually-hidden");
//         return;
//       }
//       filmList.innerHTML = filmCardMacker(results);
//       currentCollection = 'currentSearchMovieCollection';
//       messageErrorEll.classList.add("visually-hidden");
//       return;
//     }
//   );
// });
// __________________________________________________________________
const totalItems = 37960; //загальна кількість  елементів колекції
let currentpage = 1; // активна сторінка по дефолту
let notesOnPage = 20; //кількість елементів колекції на одній сторінці
let startP = 1; // номер початкової сторінки при відображенні пагінації
let pageCount; // в api total_pages
const amountPage = 10;


 export function displayPagination(startP, pageCount) {
 
   const pagination_myEll = document.querySelector('.pagination__my');
 
  console.log(pagination_myEll);
   pagination_myEll.innerHTML = "";
   currentpage = 1;
  console.log('start рендер пагінації', pageCount, startP);
  if (filmList.classList.contains('currentSearchMovieCollection')) {
    startP = 1; 
    currentpage = 1;
  }
  
  const ulEl = document.createElement('ul');
  ulEl.classList.add('pagination__my__list');

  for (let i = startP-1; i <=  pageCount+1; i++) {
    const liEll = displayPaginationBtn(i, startP, pageCount );
    ulEl.appendChild(liEll)
  }
  pagination_myEll.appendChild(ulEl)
}
//--------------------------------------------------
function displayPaginationBtn(page, start, pageCount) {
  const liEll = document.createElement("li");
  // console.log(page, pageCount);
  if (page === start-1) {
  liEll.classList.add('pagination__my__left__item');
  liEll.innerText = "<";
  } else
  {
   if (page ===  pageCount+1) {
     liEll.classList.add('pagination__my__right__item');
  liEll.innerText = ">";
   } else
   {
    liEll.innerText = page;
    liEll.classList.add('pagination__my__item');
     if (page >= start && page < start + amountPage) { liEll.classList.add('pagination__item_show'); }
     else { liEll.classList.add('visually-hidden') }
   }  
  }
  
  if (page === currentpage ) {
   liEll.classList.add('active'); 
  }
  liEll.addEventListener('click', () => {
   
    if (liEll.classList.contains('pagination__my__left__item') && start > 1) {
      start = start - amountPage
      console.log("стартовий номер", start)

      return start
    } else {
      if (liEll.classList.contains('pagination__my__right__item') && start + amountPage <= pageCount) {
        start = start + amountPage
        console.log("стартовий номер", start)

        return start
      }
    } 
    if (liEll.classList.contains('pagination__my__item')) {
      currentpage = page;
 
      // показ колекції
      // const ulColectionEll = document.querySelector('.films-list');
      // console.log(ulColectionEll);

      if (filmList.classList.contains('currentSearchMovieCollection')) {
        const inputSearchEll = document.querySelector('.header-nav__input');
        const querySearch = inputSearchEll.value.trim();
        // console.log('querySearch------------', querySearch)
        getDataFilm(ApiRequest.searchMovie, {
          query: querySearch,
          page: currentpage,
        }).then(({ results }) => {
          // запит по трендам + запит на вставку карток у films-list
          console.log(results);
          filmList.innerHTML = filmCardMacker(results);
          return;
        });
      } else {
        getDataFilm(ApiRequest.popularFilm, {
          language: 'en-US',
          page: currentpage,
        }).then(({ results }) => {
          // запит по трендам + запит на вставку карток у films-list
          console.log(results);

          filmList.innerHTML = filmCardMacker(results);
          return;
        });
      }
    }


    let currentItemLi = document.querySelector('li.active');
    
    currentItemLi.classList.remove('active');

    liEll.classList.add('active'); 
    
  })
  return liEll
  }
export function goPagination(startP, pageCount) {
  const activeLiLeftEll = document.querySelector('.pagination__my__left__item'); 
  const activeLiRightEll = document.querySelector('.pagination__my__right__item'); 
  const ulPaginationEll = document.querySelector('.pagination__my__list ');
  const liEll = ulPaginationEll.querySelectorAll('li');

  console.log(activeLiLeftEll);
  console.log(startP);
  console.log(pageCount);
activeLiLeftEll.addEventListener('click', function (e) {

  return ;
})
  // кнопка право

console.log("право",activeLiRightEll);
console.log("список  ",activeLiRightEll);
activeLiRightEll.addEventListener('click', function (e) {
  
  let newStart = startP + amountPage;
  console.log('newStart+++', newStart);
 
  if (startP + amountPage > pageCount) { return }
  else{
      
  for (let i = startP; i < newStart; i++) {
  
  liEll[i].classList.remove('pagination__item_show');
  liEll[i].classList.add('visually-hidden')
  
  }
  startP = startP + amountPage;
  if (newStart+10 >  pageCount) {
    for (let i = startP; i <= pageCount; i++) {
    
  liEll[i].classList.remove('visually-hidden');
  liEll[i].classList.add('pagination__item_show')
  
    }
    return
  } else {
    for (let i = newStart; i < newStart + amountPage; i++) {
    
  liEll[i].classList.remove('visually-hidden');
  liEll[i].classList.add('pagination__item_show')
  
  }
  }
  
  }
 
    return;
})



// кнопка вліво
const activeLiLefttEll = document.querySelector('.pagination__my__left__item'); 
console.log(activeLiLefttEll);
activeLiLefttEll.addEventListener('click', function (e) {
 
  if (startP === 1) { return }
 
const ulPaginationEll = document.querySelector('.pagination__my__list ');
 const liEll = ulPaginationEll.querySelectorAll('li');
 
 console.log('старт----home', startP,'----',startP+10);
  if (startP + amountPage > pageCount) 
    for (let i = startP; i <=  pageCount; i++) {
      console.log(liEll[i]);
      liEll[i].classList.remove('pagination__item_show');
      liEll[i].classList.add('visually-hidden')
    }
   else        
    for (let i = startP; i < startP + amountPage; i++) {
      // console.log(liEll[i]);
      liEll[i].classList.remove('pagination__item_show');
      liEll[i].classList.add('visually-hidden')
  
    }
  
    startP = startP - amountPage;
 
  for (let i = startP; i < startP + amountPage; i++)
  {
      console.log(liEll[i]);
      liEll[i].classList.remove('visually-hidden');
    liEll[i].classList.add('pagination__item_show')
  }
    return;
})
}
//-----------------------------------------------------------------------------------

      getDataFilm(ApiRequest.popularFilm, { language: 'en-US' })
  .then(res => {

    filmList.innerHTML = filmCardMacker(res.results);
    pageCount = res.total_pages;
    if (pageCount > 1000) pageCount = 1000
    console.log('pageCount     -----', res.total_pages)
    console.log('pageCount     -----', pageCount)
  
    displayPagination(startP, pageCount);
    goPagination(startP, pageCount)
  return
  })

