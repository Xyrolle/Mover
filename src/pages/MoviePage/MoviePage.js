import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

import { fade, makeStyles } from "@material-ui/core/styles";

import { fetchMovieByID } from "../../actions/index";

import Movie from "../../components/Movie/Movie";
import { Typography } from "@material-ui/core";

import "./MoviePage.css";

const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    wordWrap: "break-word",
    paddingTop: "16vh",
    display: "flex",
  },
  gridContainer: {
    justifyContent: "center",
  },
  movieColumn: {
    height: "100vh",
    justifyContent: "center",
    display: "flex",
  },
  image: {
    width: "70%",
  },
  text: {
    color: "#ffffff",
  },
  rating: {
    margin: "0 auto",
  },
}));

const posterPath = (path) => {
  return `${BASE_IMAGE_PATH}/${path}`;
};

const MoviePage = () => {
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchMovieByID(id));
  }, []);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const { id } = useParams();

  return (
    <div className={`${classes.root} moviePage`}>
      <Grid container className={classes.gridContainer}>
        <Grid
          item
          xs={5}
          columns={classes.movieColumn}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={posterPath(movies.poster_path)}
            className={classes.image}
            alt="poster"
          />
        </Grid>
        <Grid item xs={5} columns={classes.movieColumn}>
          <Typography variant="h3" className={`${classes.text} movieTitle`}>
            {movies.title}
          </Typography>
          <Rating
            value={movies.vote_average / 2}
            className={classes.rating}
            readOnly
          />
          <Typography className={`${classes.text} tagline`}>
            {movies.tagline}
          </Typography>
          <Typography variant="body1" className={`${classes.text} overview`}>
            {movies.overview}
          </Typography>
          <Typography className={`${classes.text}`}>
            Release date: {movies.release_date}
          </Typography>
          <Typography className={`${classes.text}`}>
            Runtime: {movies.runtime} minutes
          </Typography>
          {movies.revenue > 0 ? (
            <Typography className={`${classes.text}`}>
              Revenue: {movies.revenue}$
            </Typography>
          ) : null}
          {movies.genres && (
            <Typography className={`${classes.text}`}>
              Genres:{" "}
              {movies.genres.map((genre, idx) => (
                <span key={uuidv4()}>
                  {genre.name}
                  {idx + 1 < movies.genres.length ? ", " : null}
                </span>
              ))}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviePage;
