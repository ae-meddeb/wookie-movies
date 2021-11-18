import { useEffect, useState } from "react";
import movieApi from "../api/movie";
import { Movie } from "../models/movie";

export interface IStore {
  movies: Movie[];
  catalog: ICatalog;
}

export interface ICategory {
  name: string;
  movies: Movie[];
}

export interface ICatalog {
  categories: ICategory[];
}

const useStore = () => {
  const [store, setStore] = useState<IStore>({
    movies: [],
    catalog: {categories: []}
  });

  useEffect(() => {
    if (!store.movies.length) {
      movieApi.getAll().then(res => {
        const movies = res.movies.map(data => new Movie(data));
        setStore({...store, movies, catalog: getCatalog(movies)});
      });
    }
  }, [store]);

  return {store};
}

function getCatalog(movies: Movie[]) {
  return movies.reduce<ICatalog>((catalog: ICatalog, movie: Movie): ICatalog => {
    movie.nativeData.genres.forEach((genre: string) => {
      const category = catalog.categories.find(c => c.name === genre);
      if (category) {
        category.movies.push(movie);
      } else {
        catalog.categories.push({name: genre, movies: [movie]});
      }
    });
    return catalog;
  }, {categories: []});
}



export default useStore;