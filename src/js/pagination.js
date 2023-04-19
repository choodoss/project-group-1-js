import Pagination from 'tui-pagination';
import { getDataFilm } from './getDataFilm';
import ApiRequest from './ApiRequest';
import { filmCardMacker } from './film-card';
const filmList = document.querySelector('.films-list');

const pagination = new Pagination('pagination', {
  totalItems: 1000,
  itemsPerPage: 6,
  visiblePages: 5,
});

pagination.on('beforeMove', function (eventData) {
  getDataFilm(ApiRequest.popularFilm, {
    language: 'en-US',
    page: eventData.page,
  }).then(({ results }) => {
    console.log(results);
    filmList.innerHTML = filmCardMacker(results);
    currentCollection = 'topFilmsCollection';
    return;
  });
});

//зробити подвійний фетч.
// 