import React, { Fragment } from "react";
import { Provider } from "react-redux";

import { Route } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/core/styles";

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
        <Fragment>
          <Route path="/" component={Searchbar} />
          <Route exact path="/popular" component={PopularPage} />
          <Route path="/movie_info/:id" component={MoviePage} />
        </Fragment>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
