const API_KEY = '936b81ad25b58d3805a3200306ab9278';
const URL = "https://api.themoviedb.org/3/";


export function getDataFilm() {
    const parameters = new URLSearchParams({
        api_key: API_KEY,
    });
    const trendParam = 'trending/all/day'
    console.log(`${URL}${trendParam}?${parameters}`)
    return fetch(`${URL}${trendParam}?${parameters}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(response.status);
            }
            return res.json()
        })
};