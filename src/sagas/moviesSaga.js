import { call, takeEvery, put } from "redux-saga/effects";

import { MOVIES } from "../constants";
import { setMovies, setError } from "../actions";

import {
  fetchPopularMovies,
  fetchMoviesByKeyword,
  fetchMovieByID,
} from "../api/index";

export function* handleFetchPopularMovies() {
  try {
    const movies = yield call(fetchPopularMovies);
    yield put(setMovies(movies));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* handleFetchByKeyword(keyword) {
  try {
    const movies = yield call(fetchMoviesByKeyword, keyword);
    yield put(setMovies(movies));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* handleFetchByID(id) {
  try {
    const movies = yield call(fetchMovieByID, id);
    yield put(setMovies(movies));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchMoviesLoad() {
  yield takeEvery(MOVIES.FETCH_POPULAR, handleFetchPopularMovies);
  yield takeEvery(MOVIES.FETCH_BY_KEYWORD, handleFetchByKeyword);
  yield takeEvery(MOVIES.FETCH_BY_ID, handleFetchByID);
}
