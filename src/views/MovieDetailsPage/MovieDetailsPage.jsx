import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import * as movieApi from '../../services/movie-api';
import { POSTER_URL } from '../../services/movie-api';
import Loader from '../Loader/Loader';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <div>
        <img
          src={POSTER_URL + movie.poster_path}
          alt={movie.title}
          width="300"
          height="450"
        />
        <h2>{movie.title}</h2>
        <h4>
          Rating: <p>{movie.vote_average}</p>
        </h4>
        <h4>
          Overview: <p> {movie.overview}</p>
        </h4>

        {movie.genres && (
          <>
            <h4>Genres</h4>
            <ul>
              {movie.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <nav>
        <NavLink
          to={`${url}/cast`}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Cast
        </NavLink>

        <NavLink
          to={`${url}/reviews`}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}:movieId/cast`}>
            <Cast movieId={movieId} />
          </Route>
          <Route path={`${path}:movieId/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
