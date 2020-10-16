import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./MovieGrid.css";

import { selectMovies, selectIsLoading } from "../../selectors";

import Movie from "../../components/Movie/Movie";

const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const posterPath = (path) => {
  return `${BASE_IMAGE_PATH}/${path}`;
};

const MovieGrid = () => {
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="movieGrid">
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className="gridContainer"
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          Array.isArray(movies) &&
          movies.map((movie) => (
            <Movie
              title={movie.title}
              poster={posterPath(movie.poster_path)}
              id={movie.id}
              key={uuid4()}
            />
          ))
        )}
      </Grid>
    </div>
  );
};

export default MovieGrid;
