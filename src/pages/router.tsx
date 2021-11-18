import React from 'react';
import Home from './home';
import MovieDetails, { MovieProps } from './movie-details';

const router = {
  '/': () => <Home />,
  '/movies/:id': ({id}: MovieProps) => <MovieDetails id={id} />,
};

export default router;