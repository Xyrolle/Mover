import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "./Movie.css";

const useStyles = makeStyles((theme) => ({
  poster: {
    width: "80%",
    height: "100%",
    objectFit: "cover",
    cursor: "pointer",
  },
  cell: {
    marginBottom: "4vh",
    textAlign: "center",
  },
  movieTitle: {
    width: "80%",
    fontSize: "1.2rem",
    margin: "1rem auto",
    color: "#ffffff",
  },
}));

const Movie = ({ title, poster, id }) => {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={`${classes.cell} movie`}>
      <Link
        to={`movie_info/${id}`}
        onClick={(e) => (!id ? e.preventDefault() : null)}
      >
        <img src={poster} className={classes.poster} alt="movie poster" />
      </Link>
      <Typography
        variant="subtitle1"
        style={{ lineHeight: "1" }}
        noWrap
        className={classes.movieTitle}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default Movie;
