import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import "./MovieGrid.css";

import Movie from "../../components/Movie/Movie";

const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const posterPath = (path) => {
  return `${BASE_IMAGE_PATH}/${path}`;
};

const MovieGrid = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className="gridContainer"
      >
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <Movie
              title={movie.original_title}
              poster={posterPath(movie.poster_path)}
              key={uuidv4()}
            />
          ))}
      </Grid>
    </div>
  );
};

export default MovieGrid;

/*
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import "./MovieGrid.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    // gridTemplateColumns: "repeat(12, 1fr)",
    // gridGap: theme.spacing(3),
  },
  // cell: {
  //   margin: ""
  // }
  poster: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const MovieGrid = () => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        width="30%"
        display="flex"
        flexWrap="wrap"
        alignContent="flex-start"
        p={1}
        m={1}
        flexDirection="row"
        bgcolor="background.paper"
      >
        <img
          src="https://image.tmdb.org/t/p/w500//aPZOt9BR3gnk1RyX924ySq81S4P.jpg"
          alt="fdga"
        />
      </Box>
      <Box
        width="30%"
        display="flex"
        flexWrap="wrap"
        flexDirection="row"
        alignContent="flex-start"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <img
          src="https://image.tmdb.org/t/p/w500//aPZOt9BR3gnk1RyX924ySq81S4P.jpg"
          alt="fdga"
        />
      </Box>
    </div>
  );
};

/*const MovieGrid = ({ movies }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={3}>
          <img
            src="https://image.tmdb.org/t/p/w500//aPZOt9BR3gnk1RyX924ySq81S4P.jpg"
            alt="fdga"
            className={classes.poster}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://image.tmdb.org/t/p/w500//aPZOt9BR3gnk1RyX924ySq81S4P.jpg"
            alt="fdga"
            className={classes.poster}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://image.tmdb.org/t/p/w500//aPZOt9BR3gnk1RyX924ySq81S4P.jpg"
            alt="fdga"
            className={classes.poster}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieGrid;

 */
