import { combineReducers } from "redux";

import moviesReducer from "./moviesReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import searchKeywordReducer from "./searchKeywordReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  keyword: searchKeywordReducer,
});

export default rootReducer;
