import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://utopianfool.co.uk/wp-content/uploads/2020/08/fool-logo-silver.jpg";
  // "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    // const movieLink = `https://www.omdbapi.com/?i=${movie.i}/`;
    var movieId = movie.imdbID;
    const movieLink = `https://www.imdb.com/title/${movie.imdbID}/`;
    const reviewsLink = `https://www.imdb.com/title/${movie.imdbID}/reviews?ref_=tt_ql_3`;
    const summaryLink = `https://www.imdb.com/title/${movie.imdbID}/plotsummary?ref_=tt_stry_pl`;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
      <p><small>{movieId}</small></p>
      <div class="movie-links">
          <a target="_blank" rel="noopener noreferrer" href={movieLink}>
            View on IMDb
          </a>
          <a target="_blank" rel="noopener noreferrer" href={reviewsLink}>
            User Reviews
          </a>
          <a target="_blank" rel="noopener noreferrer" href={summaryLink}>
            Plot Summary
          </a>
      </div>
    </div>
  );
};


export default Movie;