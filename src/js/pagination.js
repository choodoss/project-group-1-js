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



// const pagination = new Pagination('pagination', options);
// const page = pagination.getCurrentPage();

// pagination.on('beforeMove', loadMorePopylarPhotos);

// const loadMorePopylarPhotos = async event => {
//   const currentPage = event.page;
//   Loading.hourglass({
//     clickToClose: true,
//     svgSize: '200px',
//     svgColor: '#ff6b01',
//   });
//   render.clear();
//   const data = await request.popular(currentPage);
//   const genres = await request.genres();
//   render.print(data, genres, markup.gallery);
//   Loading.remove();
// };

// pagination.reset(data.total_results);
// pagination.off('beforeMove', loadMorePopylarPhotos);
// pagination.off('beforeMove', loadMoreOueryPhotos);
// pagination.on('beforeMove', loadMoreOueryPhotos);

// pagination.reset(data.total_results);