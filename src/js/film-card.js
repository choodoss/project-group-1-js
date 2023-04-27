let genreArr = [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' },
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }];//масиву даних genre із id і значення жанру

export function filmCardMacker(arr) { //функція створення картки фільму

    return arr.map(item => {
        let genres;

        if (item.genre_ids) {
            genres = item.genre_ids // пошук співпадіння ід у картці фільму із масивом даних genre
                .map(id => {
                    const genreObj = genreArr.find(obj => obj.id === id);
                    return genreObj ? genreObj.name : '';
                });
        } else {
            const genredata = item.genres;
            genres = genredata.map(gen => gen.name);
        }
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
            poster = `https://raw.githubusercontent.com/choodoss/project-group-1-js/main/src/images/img/no-img.a640d610.jpg`
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
                <span class="${getColor(item.vote_average)}">${item.vote_average.toFixed(1)}</span> 
                </div>
    </a>
</li>`
    }
    ).join('')
}

function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "blue"
    }else{
        return 'red'
    }
}