import Api from '../index';

interface MovieServerResponse {
  movies: any[]
} 

const route = '/movies';

const movieApi = {
	getAll(): Promise<MovieServerResponse> {
		return Api.get(route);
	},

  search(text: string): Promise<MovieServerResponse> {
    return Api.get(route, {params: {q: text}})
  }
};

export default movieApi;