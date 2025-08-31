import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: { api_key: API_KEY },
  });
  return resp.data.results;
};

export const fetchSearchMovies = async (query) => {
  const resp = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query },
  });
  return resp.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return resp.data;
};

export const fetchMovieCast = async (movieId) => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });
  return resp.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },
  });
  return resp.data.results;
};
