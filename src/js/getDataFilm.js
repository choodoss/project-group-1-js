const API_KEY = '936b81ad25b58d3805a3200306ab9278';
const URL = "https://api.themoviedb.org/3/";


export function getDataFilm() { //функція запиту карток фільмів за трендом
    const parameters = new URLSearchParams({
        api_key: API_KEY,
    });
    const trendParam = 'trending/all/day' //доп аргумент для запиту по трендам який має знаходитись у самому посиланні, неможливо додати у змінну parameters
    console.log(`${URL}${trendParam}?${parameters}`)
    return fetch(`${URL}${trendParam}?${parameters}`)
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
        language: 'en-US',
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