import Spinner from "./spinner";

const API_KEY = '936b81ad25b58d3805a3200306ab9278';
const URL = "https://api.themoviedb.org/3/";

const spinner = new Spinner();


export function getDataFilm(param, searchParam = {}) { //функція запиту карток по параметру посилання і параметру
    spinner.enable(); //Увімкнути спіннер
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
            spinner.disable(); //Вимкнути спіннер
            return res.json()
        })
};

export async function getDataFilmTrailer(param, searchParam = {}) { //функція запиту карток по параметру посилання і параметру
    spinner.enable(); //Увімкнути спіннер
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
            spinner.disable(); //Вимкнути спіннер
            return res.json()
        })
};

export async function fetchTrailer(id) {
    spinner.enable(); //Увімкнути спіннер
    const trailerUrl = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
    const response = await fetch(trailerUrl);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    spinner.disable(); //Вимкнути спіннер
    return await response.json();
}


export async function getMoviesById(ids) {
    const promises = ids.map(id =>
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then(response => response.json())
    );
    
    const movies = await Promise.all(promises);
    
    return movies;
  }