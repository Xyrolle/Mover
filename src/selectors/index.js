import { createSelector } from "reselect";

const getMovies = (state) => state.movies;
const getKeyword = (state) => state.keyword;
const getIsLoading = (state) => state.isLoading;

const selectMovies = createSelector([getMovies], (getMovies) => {
  return getMovies;
});

const selectKeyword = createSelector([getKeyword], (getKeyword) => {
  return getKeyword;
});

const selectIsLoading = createSelector([getIsLoading], (getIsLoading) => {
  return getIsLoading;
});

export { selectMovies, selectKeyword, selectIsLoading };
