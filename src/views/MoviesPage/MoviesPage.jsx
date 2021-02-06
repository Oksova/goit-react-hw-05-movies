import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import Container from '../../components/Container/Container';
import SearchMoviesView from '../SearchMoviesView/SearchMoviesView';

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovie = new URLSearchParams(location.search).get('query');
  const onSearchMovie = query => {
    history.push({ ...location, search: `query=${query}` });
  };
  const onSubmit = name => {
    setMovieName(name);
    setMovies([]);
    onSearchMovie(name);
  };
  return (
    <Container>
      <SearchBar onSubmit={onSubmit} />
      <SearchMoviesView movieName={movieName} searchMovie={searchMovie} />
    </Container>
  );
}
