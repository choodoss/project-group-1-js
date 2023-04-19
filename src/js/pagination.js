import Pagination from 'tui-pagination';
import { getDataFilm } from './getDataFilm';
import ApiRequest from './ApiRequest';
import { filmCardMacker } from './film-card';
const filmList = document.querySelector('.films-list');

const pagination = new Pagination('pagination', {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,

});

pagination.on('beforeMove', function (eventData) {
  getDataFilm(ApiRequest.popularFilm, {
    language: 'en-US',
    page: eventData.page,
  })
    .then(({ results }) => {
      filmList.innerHTML = filmCardMacker(results);
      currentCollection = 'topFilmsCollection';
      return;
    });
});
pagination.on('beforeMove', function (eventData) {
  getDataFilm(ApiRequest.searchMovie, { query: querySearch }).then(
    ({ results }) => {
      // запит по трендам + запит на вставку карток у films-list
      console.log(results);
      if (results.length === 0) {
        clearTimeout(timeoutId)
        messageErrorEll.classList.remove("visually-hidden");
        return;
      }
      filmList.innerHTML = filmCardMacker(results);
      currentCollection = 'currentSearchMovieCollection';
      messageErrorEll.classList.add("visually-hidden");
      return;
    }
  );
});

