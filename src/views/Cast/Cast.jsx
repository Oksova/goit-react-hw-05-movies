import { useState, useEffect } from 'react';
import { fetchMovieCast, POSTER_URL } from '../../services/movie-api';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    console.log('fetch cast');
    fetchMovieCast(movieId).then(request => setCast(request.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          <ul>
            {cast.map(item => (
              <>
                {item.profile_path && (
                  <li key={item.profile_path}>
                    <img
                      src={POSTER_URL + item.profile_path}
                      alt={item.name}
                      width="150"
                      height="200"
                    />
                    <p>{item.name}</p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
