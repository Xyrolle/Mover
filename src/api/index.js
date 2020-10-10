const KEY = "3a4f942539cdf3dbac0716276833cf4b";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchMovieByID = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
  const data = await response.json();

  if (data.errors) {
    throw new Error(`Error while fetching: ${data.errors}`);
  }

  return data;
};

const fetchPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${KEY}&language=en-US&page=1&region=US`
  );
  const data = await response.json();

  console.log(data);

  if (data.errors) {
    throw new Error(`Error while fetching: ${data.errors}`);
  }

  return data.results;
};

const fetchMoviesByKeyword = async (keyword) => {
  console.log(keyword, "is the keyword");
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${keyword}&page=1&include_adult=true`
  );
  const data = await response.json();

  console.log(keyword, "k[klklpk");

  if (data.errors) {
    throw new Error(`Error while fetching: ${data.errors}`);
  }

  return data.results;
};

export { fetchPopularMovies, fetchMoviesByKeyword, fetchMovieByID };
