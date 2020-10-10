// import React, { Fragment, useEffect } from "react";
// import { connect, useSelector, useDispatch } from "react-redux";
//
// import Movie from "../Movie/Movie";
//
// import { MOVIES } from "../../constants/index";
//
// import {
//   fetchPopularMovies,
//   changeSearchKeyword,
//   fetchMoviesByKeyword,
// } from "../../actions";
//
// const BASE_IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
//
// const posterPath = (path) => {
//   return `${BASE_IMAGE_PATH}/${path}`;
// };
//
// const Movies = ({ movies }) => {
//   useEffect(() => {
//     // dispatch({ type: fetchPopularMovies() });
//   }, []);
//
//   const keyword = useSelector((state) => state.keyword);
//   const movies = useSelector((state) => state.movies);
//   const errors = useSelector((state) => state.errors);
//   const isLoading = useSelector((state) => state.isLoading);
//
//   const dispatch = useDispatch();
//
//   return (
//     <Fragment>
//       <div>a movie</div>
//       keyword is {keyword} ----
//       {console.log(keyword, "keyword")}
//       <button onClick={() => dispatch(fetchMoviesByKeyword())}>
//         by keyword
//       </button>
//       <button
//         onClick={() => dispatch(changeSearchKeyword("BACK TO THE FUTURE"))}
//       >
//         keyword change
//       </button>
//       {console.log(movies)}
//       {movies.length && (
//         <Movie
//           title={movies[0].original_title}
//           poster={posterPath(movies[0].poster_path)}
//         />
//       )}
//     </Fragment>
//   );
// };
//
// export default Movies;
