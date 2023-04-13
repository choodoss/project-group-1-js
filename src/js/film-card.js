import { getGenre } from "./getDataFilm";

const params = ['genre/tv/list', 'genre/movie/list'];//параметри для розшифровки genre (жанри фільмів, які приходять у вигляді масиву з ID жанру)
let genreArr = [];//масиву даних genre із id і значення жанру

getGenre(params).then(res => {//функція запиту genre і створення эдиного масиву даних genre із id і значення жанру
    genreArr = [...res[0].genres, ...res[1].genres]
}
);

//getGenre(params) має обовязково запускатись при пешому відкритті сайту, адже без готовох бази жанрів, неможливо буде відобразити коректно розмітку!!!

export function filmCardMacker(arr) { //функція створення картки фільму
    return arr.map(item => {

        const genres = item.genre_ids // пошук співпадіння ід у картці фільму із масивом даних genre
            .map(id => {
                const genreObj = genreArr.find(obj => obj.id === id);
                return genreObj ? genreObj.name : '';
            });

        let genreString;

        if (genres.length > 2) { //формування довжини жанру фільму
            genreString = genres.slice(0, 2).join(', ') + ', Other';
            if (genreString.length > 30) {
                genreString = genres.slice(0, 1).join(', ') + ', Other';
            }
        } else {
            genreString = genres.length > 0 ? `${genres.join(', ')} | ` : '';
        }

        //розмітка картки фільму
        return `<li class="film"> 
    <a class="film-link" data-modal-open href="javascript:void(0)">
        <img loading="lazy" width="280" height="398" src="https://image.tmdb.org/t/p/w400${item.poster_path}" alt="${item.title ? item.title : item.name}film cover"
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