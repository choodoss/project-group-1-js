import { getDataFilm } from './getDataFilm';
import { filmCardMacker } from './film-card';

const filmList = document.querySelector('.films-list')

getDataFilm().then(({ results }) => {
    console.log(results)
    filmList.innerHTML = filmCardMacker(results);
    return
})

//Розіюратись із genre (жанр фільму), як його правильно відобразити!
// https://api.themoviedb.org/3/genre/tv/list?api_key=<<api_key>>&language=en-US

