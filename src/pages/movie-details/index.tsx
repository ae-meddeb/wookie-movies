import React, { useContext, useEffect, useState } from 'react';
import { Movie } from '../../models/movie';
import { Context } from '../../store';
import { IContext } from '../../store/context';
import './style.css';
import Rating from '@mui/material/Rating';

export type MovieProps = {
  id: string,
}

function MovieDetails({ id }: MovieProps) {

  const {store} = useContext<IContext>(Context);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const movie = store.movies.find(m => m.id === id);
    if (movie) {
      setMovie(movie);
    }
  }, [store.movies, id]);

  if (movie) {
    return (
      <div className="container">
        <div className="movie-details">
          <img className="poster" src={movie.poster} alt={movie.title} />
          <div className="movie-description">
            <div className="top">
              <div>{ `${movie.title} (${movie.imdb})` }</div>
              <div className="rating">
                <Rating value={movie.rating} precision={0.1} readOnly />
              </div>
            </div>
            <div className="content-description">
              <div>{ `${movie.year} | ${movie.duration} | ${movie.director}` }</div>
              <div>{ `Cast: ${movie.cast.join(', ')}` }</div>
            </div>
            <div>{ movie.overview }</div>
          </div>
        </div>
      </div>
      
    );
  }
  return null;
}

export default MovieDetails;
