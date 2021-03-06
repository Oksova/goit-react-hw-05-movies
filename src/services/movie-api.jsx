const API_KEY = '980d38ea9ee989c66d6645f5df2e9809';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchMovies(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`,
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
