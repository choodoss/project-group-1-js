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


function displayPagination(startP, pageCount ) {
  const pagination_myEll = document.querySelector('.pagination__my');
  console.log(pagination_myEll);
 
  console.log('start рендер пагінації', startP);
  
  if ((startP + 10) > pageCount ) {
    endP = pageCount
  } else { endP = startP + 9 };
  
  const ulEl = document.createElement('ul');
  ulEl.classList.add('pagination__my__list');

  for (let i = startP-1; i <=  pageCount+1; i++) {
    const liEll = displayPaginationBtn(i, startP);
    ulEl.appendChild(liEll)
  }
  pagination_myEll.appendChild(ulEl)
}
//--------------------------------------------------
function displayPaginationBtn(page, start) {
  const liEll = document.createElement("li");
  // console.log(page);
  if (page === start-1) {
  liEll.classList.add('pagination__my__left__item');
  liEll.innerText = "<";
  } else {
   if (page ===  pageCount+1) {
     liEll.classList.add('pagination__my__right__item');
  liEll.innerText = ">";
   } else {
     
    liEll.innerText = page;
    liEll.classList.add('pagination__my__item');
     if (page >= start && page< start+10) { liEll.classList.add('pagination__item_show');
           } else {liEll.classList.add('visually-hidden')}
   }
     
  }
  
  if (page === currentpage ) {
   liEll.classList.add('active'); 
  }
  liEll.addEventListener('click', () => {
    if (liEll.classList.contains('pagination__my__item')) {
        currentpage = page;
    } else {
if (liEll.classList.contains('pagination__my__left__item') && start > 0) {
  start = start - 10
  console.log("стартовий номер",start)
}
     return start
    }
        
    // показ колекції

getDataFilm(ApiRequest.popularFilm, {
        language: 'en-US',
        page: currentpage,
      }).then(({ results }) => {
        // запит по трендам + запит на вставку карток у films-list
        console.log(results);

        filmList.innerHTML = filmCardMacker(results);
        return;
      });


    let currentItemLi = document.querySelector('li.active');
    
    currentItemLi.classList.remove('active');

    liEll.classList.add('active'); 
    
  })
  return liEll
  }
function goPagination() {
  const activeLiLeftEll = document.querySelector('.pagination__my__left__item'); 
console.log(activeLiLeftEll);
activeLiLeftEll.addEventListener('click', function (e) {

  return;
})
  // кнопка право
const activeLiRightEll = document.querySelector('.pagination__my__right__item'); 
console.log(activeLiRightEll);

activeLiRightEll.addEventListener('click', function (e) {
  
  let newStart = startP + 10;
 
  if (startP + 10 > pageCount) { return }
  else{
     const ulPaginationEll = document.querySelector('.pagination__my__list ');
 
  const liEll = ulPaginationEll.querySelectorAll('li');
 
  for (let i = startP; i < newStart; i++) {
  
  liEll[i].classList.remove('pagination__item_show');
  liEll[i].classList.add('visually-hidden')
  
  }
  startP = startP + 10;
  if (newStart+10 >  pageCount) {
    for (let i = startP; i <= totalItems; i++) {
    
  liEll[i].classList.remove('visually-hidden');
  liEll[i].classList.add('pagination__item_show')
  
    }
    return
  } else {
    for (let i = newStart; i < newStart + 10; i++) {
    
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
  if (startP + 10 > totalItems) 
    for (let i = startP; i <=  pageCount; i++) {
      console.log(liEll[i]);
      liEll[i].classList.remove('pagination__item_show');
      liEll[i].classList.add('visually-hidden')
    }
   else        
    for (let i = startP; i < startP + 10; i++) {
      console.log(liEll[i]);
      liEll[i].classList.remove('pagination__item_show');
      liEll[i].classList.add('visually-hidden')
  
    }
  
    startP = startP - 10;
 
  for (let i = startP; i < startP + 10; i++)
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
    currentCollection = 'topFilmsCollection';
    displayPagination(startP, pageCount);
    goPagination()
  return
  }
  );
