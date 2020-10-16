import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MovieGrid from "../../components/MovieGrid/MovieGrid";
import Typography from "@material-ui/core/Typography";

import { fetchPopularMovies } from "../../actions/index";
import { makeStyles } from "@material-ui/core/styles";

import "./PopularPage.css";

const useStyles = makeStyles((theme) => ({
  hotRightNow: {
    marginBottom: "2rem",
    fontSize: "2rem",
    paddingTop: "12vh",
    textAlign: "center",
    color: "#ffffff",
  },
}));

const PopularPage = () => {
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className="hotRightNowSection">
      <Typography variant="h5" gutterBottom className={classes.hotRightNow}>
        Hot Right Now
      </Typography>
      <MovieGrid />
    </div>
  );
};

export default PopularPage;
