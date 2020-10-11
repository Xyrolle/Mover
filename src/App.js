import React, { Fragment } from "react";
import { Provider } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import { Route } from "react-router-dom";

import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import { MuiThemeProvider } from "@material-ui/core/styles";

import SearchPage from "./pages/SearchPage/SearchPage";

import theme from "./MUI/theme";

import Searchbar from "./components/Searchbar/Searchbar";

import PopularPage from "./pages/PopularPage/PopularPage";
import MoviePage from "./pages/MoviePage/MoviePage";

import "./App.css";

import configureStore from "./store";
const store = configureStore();

// const useStyles = makeStyles((theme) => ({
//   mainColor: {},
// }));

const App = () => {
  // const classes = useStyles();
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div>
          <Route path="/" component={Searchbar} />
          <Route exact path="/popular" component={PopularPage} />
          <Route path="/movie_info/:id" component={MoviePage} />
          <Route path="/searchMovie" component={SearchPage} />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
