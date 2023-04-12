export function filmCardMacker(arr) {
    return arr.map(item => {
        return `<li class="film">
    <a class="film-link" data-modal-open href="javascript:void(0)">
        <img loading="lazy" width="280" height="398" src="${}./images/img/Rectangle 12.jpg" alt="${}film cover"
            class="film__img">
            <div class="film-body">
                <p class="film__name">${}MONSTER HUNTER</p>
                <p class="film__description">${}Drama, Action | 2020</p>
            </div>
    </a>
</li>`
    }
    ).join('')
}