import React, { useEffect, useState } from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import movieApi from '../../api/movie';
import { Movie } from '../../models/movie';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { navigate } from 'raviger';

function Header() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: any) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);
    if (searchText) {
      movieApi.search(searchText)
      .then(({movies}) => {
        if (movies.length) {
          setMovies(movies.map(movie => new Movie(movie)));
        } else {
          setMovies([]);
        }
      });
    } else {
      setMovies([]);
    }
  };

  const handleMovieSelect = (id: string) => {
    resetSearch();
    void navigate(`/movies/${id}`);
  };

  const resetSearch = () => {
    setSearchTerm('');
    setMovies([]);
  }

  useEffect(() => {
    window.addEventListener('click', resetSearch);
    return () => {
      window.removeEventListener('click', resetSearch);
    };
  }, []);

  return (
    <div className="header">
      <div className="logo">wookie movies</div>
      <div className="search">
        <TextField label="Search..." variant="outlined" value={searchTerm} onChange={handleInputChange}/>
        {
          movies.length > 0 && (
            <List>
              {
                movies.map((movie, i) => (
                  <ListItem button divider={i !== movies.length - 1} onClick={() => handleMovieSelect(movie.id)} key={i}>
                    <ListItemText primary={movie.title} />
                  </ListItem>
                ))
              }
            </List>
          )
        }
      </div>
    </div>
  );
}

export default Header;
