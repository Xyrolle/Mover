import React from "react";
import { Provider } from "react-redux";

import { Route } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";

import SearchPage from "./pages/SearchPage/SearchPage";

import theme from "./MUI/theme";

import Searchbar from "./components/Searchbar/Searchbar";

import PopularPage from "./pages/PopularPage/PopularPage";
import MoviePage from "./pages/MoviePage/MoviePage";

import "./App.css";

import configureStore from "./store";
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div>
          <Route path="/" component={Searchbar} />
          <Route exact path="/" component={PopularPage} />
          <Route path="/movie_info/:id" component={MoviePage} />
          <Route path="/searchMovie" component={SearchPage} />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
