import { navigate } from 'raviger';
import React from 'react';
import { ICategory } from '../../store/useStore';
import './style.css';

export type CategoryProps = {
  category: ICategory,
}

function Category({ category }: CategoryProps) {
  return (
    <div className="category">
      <div className="title">{category.name}</div>
      <div className="category-movies">
        {
          category.movies.map(movie => (
            <div className="movie-tuile" key={movie.id}
              style={{'backgroundImage': `url(${movie.backdrop})`}}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Category;
