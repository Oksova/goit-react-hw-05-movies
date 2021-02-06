import { POSTER_URL } from '../../services/movie-api';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './MovieGalleryView.module.css';

export default function MovieGalleryView({ movies }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <>
          {movie.poster_path && (
            <li key={movie.id} className={s.item}>
              <Link to={`${url}/${movie.id}`}>
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
          )}
        </>
      ))}
    </ul>
  );
}
