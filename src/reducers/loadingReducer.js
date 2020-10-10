import { MOVIES } from "../constants";

const loadingReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES.FETCH_POPULAR:
    case MOVIES.FETCH_BY_KEYWORD:
      return true;
    case MOVIES.FETCH_SUCCESS:
    case MOVIES.FETCH_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
