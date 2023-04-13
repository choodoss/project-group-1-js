import { getDataFilm } from './getDataFilm';
import { filmCardMacker } from './film-card';
const filmList = document.querySelector('.films-list') // галерея карток з фільмами
import ApiRequest from './ApiRequest'

getDataFilm(ApiRequest.popularFilm, { language: 'en-US' }).then(({ results }) => {// запит по трендам + запит на вставку карток у films-list
    console.log(results)
    filmList.innerHTML = filmCardMacker(results);
    return
})



