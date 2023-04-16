import { getDataFilm } from './getDataFilm';
import ApiRequest from './ApiRequest';
//overview
export function cardFilmMacker({ id, poster, genres, title, original, popularity, average, count }) {
    const filmcard = document.querySelector('.about-film');
    getDataFilm(`${ApiRequest.movieDetails}${id}`, { language: 'en-US' })
        .then(({ overview }) => {
            filmcard.innerHTML = `<img class="about-film__img" src="${poster}" />
            <div class="about-film__body">
                <h3 class="film__title">${title}</h3>
                <div class="film-atributes">
                    <ul class="film-properties">
                        <li class="film-properties__item">
                            <p class="property">Vote / Votes</p>
                        </li>
                        <li class="film-properties__item">
                            <p class="property">Popularity</p>
                        </li>
                        <li class="film-properties__item">
                            <p class="property">Original Title</p>
                        </li>
                        <li class="film-properties__item">
                            <p class="property">Genre</p>
                        </li>
                    </ul>
                    <ul class="film-value">
                        <li class="film-value__item">
                            <p class="value">
                                <span class="value--red">${average}</span><span class="value--gray"> / </span>
                                <span class="value--gray-bg">${count}</span>
                            </p>
                        </li>
                        <li class="film-value__item">
                            <p class="value">${popularity}</p>
                        </li>
                        <li class="film-value__item">
                            <p class="value">${original}</p>
                        </li>
                        <li class="film-value__item">
                            <p class="value">${genres}</p>
                        </li>
                    </ul>
                </div>
                <div class="about-film__description">
                    <h4 class="description__title">About</h4>
                    <p class="description">
${overview}
                    </p>
                </div>
                <div class="button__wraper" id="buttonWrapper">
                    <button class="add-to-watched" type="button" id="btn" data-value="add">
                        add to Watched
                    </button>
                    <button class="add-to-queue" type="button" id="btn" data-value="add">
                        add to queue
                    </button>
                </div>
            </div>`
        })
}