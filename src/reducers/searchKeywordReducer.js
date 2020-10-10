import { MOVIES } from "../constants";

const searchKeywordReducer = (state = "", action) => {
  switch (action.type) {
    case MOVIES.CHANGE_SEARCH_KEYWORD:
      state = action.keyword;
      return state;

    default:
      return state;
  }
};

export default searchKeywordReducer;
