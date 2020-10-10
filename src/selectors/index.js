import { createSelector } from "reselect";

const getMovies = (state) => state.movies;
const getKeyword = (state) => state.keyword;

const selectMovies = createSelector([getMovies], (getMovies) => {
  console.log("movie output");
  return getMovies;
});

const selectKeyword = createSelector([getKeyword], (getKeyword) => {
  console.log("keyword output");
  return getKeyword;
});

export { selectMovies, selectKeyword };
