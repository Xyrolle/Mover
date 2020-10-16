import { MOVIES } from "../constants/index";

const fetchPopularMovies = () => ({
  type: MOVIES.FETCH_POPULAR,
});

const setMovies = (movies) => ({
  type: MOVIES.FETCH_SUCCESS,
  movies,
});

const fetchMoviesByKeyword = (keyword) => ({
  type: MOVIES.FETCH_BY_KEYWORD,
  keyword,
});

const fetchMovieByID = (id) => ({
  type: MOVIES.FETCH_BY_ID,
  id,
});

const changeSearchKeyword = (keyword) => ({
  type: MOVIES.CHANGE_SEARCH_KEYWORD,
  keyword,
});

const setError = (error) => ({
  type: MOVIES.FETCH_FAIL,
  error,
});

export {
  fetchPopularMovies,
  fetchMoviesByKeyword,
  fetchMovieByID,
  setMovies,
  setError,
  changeSearchKeyword,
};
