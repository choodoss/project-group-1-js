import { getGenre } from "./getDataFilm";

const params = ['genre/tv/list', 'genre/movie/list'];
let genreArr = [];

getGenre(params).then(res => {
    genreArr = [...res[0].genres, ...res[1].genres]
    console.log(genreArr)
}
);

export function filmCardMacker(arr) {
    return arr.map(item => {

        const genres = item.genre_ids
            .map(id => {
                const genreObj = genreArr.find(obj => obj.id === id);
                return genreObj ? genreObj.name : '';
            });

        const genreString = genres.length > 0 ? `${genres.join(', ')} | ` : '';

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

//https://image.tmdb.org/t/p/w400${item.poster_path} - потрібно переробити із параметрами.