import { MOVIES } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.FETCH_FAIL:
      return action.error;

    case MOVIES.FETCH_POPULAR:
    case MOVIES.CHANGE_SEARCH_KEYWORD:
    case MOVIES.FETCH_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
