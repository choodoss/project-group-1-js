const API_KEY = '936b81ad25b58d3805a3200306ab9278';
const URL = "https://api.themoviedb.org/3/";


export function getDataFilm(param, searchParam = {}) { //функція запиту карток по параметру посилання і параметру
    const parameters = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        ...searchParam
    });

    return fetch(`${URL}${param}?${parameters}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(response.status);
            }
            return res.json()
        })
};

export async function getDataFilmTrailer(param, searchParam = {}) { //функція запиту карток по параметру посилання і параметру
    const parameters = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        ...searchParam
    });

    return fetch(`${URL}${param}?${parameters}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(response.status);
            }
            return res.json()
        })
};

export async function fetchTrailer(id) {
    const trailerUrl = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
    const response = await fetch(trailerUrl);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}