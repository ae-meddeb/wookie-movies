export class Movie {

    public id: string;
    public poster: string;
    public backdrop: string;
    public title: string;
    public overview: string;
    public imdb: number;
    public rating: number;
    public director: string;
    public year: number;
    public duration: number;
    public cast: string[];

    constructor(public nativeData: any) {
        this.id = nativeData.id;
        this.poster = nativeData.poster;
        this.backdrop = nativeData.backdrop;
        this.title = nativeData.title;
        this.overview = nativeData.overview;
        this.imdb = nativeData.imdb_rating;
        this.rating = nativeData.imdb_rating / 2;
        this.director = nativeData.director;
        this.year = new Date(nativeData.released_on).getFullYear();
        this.duration = nativeData.length;
        this.cast = nativeData.cast;
    }

    

}