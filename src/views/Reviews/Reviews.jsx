import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/movie-api';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(request => setReviews(request.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <>
          <ul>
            {reviews.map((item, id) => (
              <li key={id}>
                <h4>{item.author}</h4>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3> No reviews</h3>
      )}
    </div>
  );
}
