export function filmCardMacker(arr) {
    return arr.map(item => {
        return `<li class="film">
    <a class="film-link" data-modal-open href="javascript:void(0)">
        <img loading="lazy" width="280" height="398" src="https://image.tmdb.org/t/p/w400${item.poster_path}" alt="${item.title}film cover"
            class="film__img">
            <div class="film-body">
                <p class="film__name">${item.title}</p>
                <p class="film__description">Drama | ${item.release_date}</p>
            </div>
    </a>
</li>`
    }
    ).join('')
}

//https://image.tmdb.org/t/p/w400${item.poster_path} - потрібно переробити із параметрами.