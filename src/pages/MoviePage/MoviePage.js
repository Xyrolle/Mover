import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchMovieByID } from "../../actions/index";

import Movie from "../../components/Movie/Movie";

const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const posterPath = (path) => {
  return `${BASE_IMAGE_PATH}/${path}`;
};

const MoviePage = () => {
  useEffect(() => {
    dispatch(fetchMovieByID(id));
  }, []);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const { id } = useParams();

  return (
    <div>
      Movie page Movie pageMovie pageMovie pageMovie pageMovie pageMovie
      pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie
      pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie page Movie
      pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie
      pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie pageMovie
      pageMovie pageMovie pageMovie pageMovie page
      <Movie poster={posterPath(movies.poster_path)} />
    </div>
  );
};

export default MoviePage;
