import { MOVIES } from "../constants/index";

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case MOVIES.FETCH_SUCCESS:
      return action.movies;

    default:
      return state;
  }
};

export default moviesReducer;
