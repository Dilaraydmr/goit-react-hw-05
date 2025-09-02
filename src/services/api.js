import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";


const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmRkOTY3NTM4YjdmM2RhMDAzODI2YzAxZmJiOGIwZSIsIm5iZiI6MTc1NjI0MDIwMi40NCwic3ViIjoiNjhhZTE5NGE0MDQ0NjMwODllMGY4N2Y1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pV1U2UAMjACU1jHXAtlNDVL2QhML0YFjV3HU7pY0DkM";

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return response.data.results;
  } catch (error) {
    console.error("Error while getting popular movies:", error);
    throw error;
  }
};

export const fetchSearchMovies = async (query) => {
  try {
    const resp = await axios.get(`${BASE_URL}/search/movie?query=${query}`, options);
    return resp.data.results;
  } catch (error) {
    console.error("Error fetching search movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
    return resp.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
    return resp.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
    return resp.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};
