import { getDataFilm } from './getDataFilm';
import { filmCardMacker } from './film-card';

const filmList = document.querySelector('.films-list') // галерея карток з фільмами

getDataFilm().then(({ results }) => {// запит по трендам + запит на вставку карток у films-list
    console.log(results)
    filmList.innerHTML = filmCardMacker(results);
    return
})


