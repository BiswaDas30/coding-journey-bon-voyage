import React, { useState } from 'react';
import { getMovies } from '../apiService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMovies, setShowMovies] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMovies();
      setMovies(data);
      setShowMovies(true);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchMovies}>Show Movies</button>
      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showMovies && !loading && !error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.movieId}>
              <strong>{movie.movieName}</strong> ({movie.movieYear}) - {movie.movieType} | {movie.movieLanguage}
              <p><strong>Release Date:</strong> {movie.movieReleaseDate}</p>
              <p><strong>Duration:</strong> {movie.movieDuration}</p>
              <p><strong>Rating:</strong> {movie.movieRating}</p>
              <p>{movie.movieDescription}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;