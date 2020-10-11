import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMoviesByKeyword } from "../../actions/index";

import MovieGrid from "../../components/MovieGrid/MovieGrid";

import "./SearchPage.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  resultsHeading: {
    marginBottom: "2rem",
    paddingTop: "12vh",
    fontSize: "1.8rem",
    textAlign: "center",
    color: "#ffffff",
  },
}));

const SearchPage = () => {
  const keyword = new URLSearchParams(window.location.search).get("keyword");
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    console.log(keyword, "in use effect");
    dispatch(fetchMoviesByKeyword(keyword));
  }, [keyword]);

  return (
    <div className="searchPage">
      <Typography variant="h5" className={classes.resultsHeading}>
        Here are some movies
      </Typography>
      <MovieGrid />
    </div>
  );
};

export default SearchPage;
