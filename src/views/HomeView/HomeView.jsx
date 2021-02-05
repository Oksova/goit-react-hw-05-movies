import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import PageHeading from '../../components/PageHeading/PageHeading';
import * as movieApi from '../../services/movie-api';
import { POSTER_URL } from '../../services/movie-api';
import ErrorView from '../ErrorView/ErrorView';
import s from './HomeView.module.css';

export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('movie UseEffect');
    setStatus('pending');
    movieApi
      .fetchTrendingMovies()
      .then(request => setMovies(request.results), setStatus('resolved'))
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  if (status === 'rejected') {
    return <ErrorView message={error.message} />;
  }
  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'resolved') {
    return (
      <>
        <PageHeading />

        {movies && (
          <>
            <p className={s.title}>Trending Movies</p>
            <ul className={s.list}>
              {movies.map(movie => (
                <li key={movie.id} className={s.item}>
                  <Link to={`${url}movies/${movie.id}`}>
                    <img
                      className={s.image}
                      src={POSTER_URL + movie.poster_path}
                      alt={movie.title}
                      width="350"
                      height="400"
                    />
                  </Link>
                  <p className={s.MovieTitle}>{movie.title} </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
