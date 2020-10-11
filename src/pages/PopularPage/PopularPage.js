import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Typography from "@material-ui/core/Typography";

import { fetchPopularMovies } from "../../actions/index";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hotRightNow: {
    marginBottom: "2rem",
    paddingTop: "12vh",
    textAlign: "center",
    color: "#ffffff",
  },
}));

const PopularPage = () => {
  // make call to an api to fetch popular movies

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.hotRightNow}>
        Hot Right Now
      </Typography>
      <MovieGrid />
    </div>
  );
};

export default PopularPage;
