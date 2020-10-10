import React from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    marginTop: "20px",
  },
}));

const Movie = ({ title, poster }) => {
  const classes = useStyles();
  return (
    <Grid item xs={3} className={classes.cell}>
      <img src={poster} className={classes.poster} />
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
