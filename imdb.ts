import { Professional } from "./Profesional";
import { Movie } from "./Movie";

class IMDB {

    public movies:Movie[];
    constructor(movies:Movie[]) {
        this.movies = movies;
    }
    
}