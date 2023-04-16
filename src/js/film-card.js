import ApiRequest from './ApiRequest';
import { getGenre } from './getDataFilm';

let genreArr = [];//масиву даних genre із id і значення жанру

getGenre(ApiRequest.genre).then(res => {//функція запиту genre і створення эдиного масиву даних genre із id і значення жанру
    console.log(res)
    genreArr = [...res[0].genres, ...res[1].genres]
}
)
//getGenre(params) має обовязково запускатись при пешому відкритті сайту, адже без готовох бази жанрів, неможливо буде відобразити коректно розмітку!!!

export function filmCardMacker(arr) { //функція створення картки фільму

    return arr.map(item => {

        const genres = item.genre_ids // пошук співпадіння ід у картці фільму із масивом даних genre
            .map(id => {
                const genreObj = genreArr.find(obj => obj.id === id);
                return genreObj ? genreObj.name : '';
            });

        const genresAllforfilmAbout = genres.join(', ');

        let genreString;
        if (genres.length > 2) { //формування довжини жанру фільму
            genreString = genres.slice(0, 2).join(', ') + ', Other';
            if (genreString.length > 30) {
                genreString = genres.slice(0, 1).join(', ') + ', Other';
            }
        } else {
            genreString = genres.length > 0 ? `${genres.join(', ')} ` : '';
        }

        let serchPoster = item.poster_path;
        let poster;
        if (serchPoster === null) {
            poster = `/no-img.a640d610.c4030ab6.jpg`
        } else {
            poster = `https://image.tmdb.org/t/p/w500${serchPoster}`
        }
        //розмітка картки фільму original_title

        return `<li class="film"> 
    <a class="film-link" data-modal-open href="javascript:void(0)">
        <img loading="lazy" data-id=${item.id} data-poster=${poster} data-genres="${genresAllforfilmAbout}" data-title="${item.title ? item.title : item.name}" data-original="${item.original_title}" data-popularity=${item.popularity} data-average=${item.vote_average} data-count=${item.vote_count} width="280"  height="398" src="${poster}" alt="${item.title ? item.title : item.name}film cover"
            class="film__img">
            <div class="film-body">
                <p class="film__name">${item.title ? item.title : item.name}</p>
                <p class="film__description">${genreString} | ${item.release_date ? item.release_date.slice(0, 4) : 'TBD'}</p>
            </div>
    </a>
</li>`
    }
    ).join('')
}