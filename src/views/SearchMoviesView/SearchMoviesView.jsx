import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/movie-api';
import Loader from '../Loader/Loader';
import ErrorView from '../ErrorView/ErrorView';
import MovieGalleryView from '../MovieGalleryView/MovieGalleryView';

export default function SearchMoviesView({ searchMovie, movieName }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const fetchMovieByName = name => {
    console.log(fetchMovieByName);
    fetchMovies(name)
      .then(newMovies => {
        if (newMovies.total_results > 0) {
          setMovies(newMovies.results);
          setStatus('resolved');
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  };

  useEffect(() => {
    console.log(useEffect, 'use Effect in SearchMovieView');
    if (movieName === '' && searchMovie !== null) {
      fetchMovieByName(searchMovie);
      return;
    }
    if (movieName) {
      fetchMovieByName(movieName);
    }
  }, [searchMovie, movieName]);

  if (status === 'idle') {
    return 'Please enter your request';
  }

  if (status === 'error') {
    return <ErrorView message={error.message} />;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return (
      <>
        <MovieGalleryView movies={movies} />
      </>
    );
  }
}
