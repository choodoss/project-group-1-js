const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '936b81ad25b58d3805a3200306ab9278';

export const filmApiService = movie_id =>
  fetch(`${BASE_URL}${movie_id}?api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        error => console.log(error);
      }
      return response.json();
    })
    .catch(error => console.log(error));
