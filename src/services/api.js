import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return resp.data.results;
};

export const fetchSearchMovies = async (query) => {
  const resp = await axios.get(`${BASE_URL}/search/movie?query=${query}`, options);
  return resp.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return resp.data;
};

export const fetchMovieCast = async (movieId) => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return resp.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return resp.data.results;
};
