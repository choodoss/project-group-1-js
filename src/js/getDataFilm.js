const API_KEY = '936b81ad25b58d3805a3200306ab9278';
const URL = "https://api.themoviedb.org/3/";


export function getDataFilm(param, searchParam = {}) { //функція запиту карток по параметру посилання і параметру
    const parameters = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        ...searchParam
    });
    console.log(`${URL}${param}?${parameters}`);
    return fetch(`${URL}${param}?${parameters}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(response.status);
            }
            return res.json()
        })
};


export function getGenre(params) { //функція запиту genre і створення эдиного масиву даних genre із id і значення жанру
    const parameters = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US'
    });
    const promises = params.map(param => {
        return fetch(`${URL}${param}?${parameters}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    });
    return Promise.all(promises);
}