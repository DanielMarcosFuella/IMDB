import { Professional } from "./Profesional";
import { Movie } from "./Movie";

export class IMDB {

    public movies:Movie[];
    constructor(movies:Movie[]) {
        this.movies = movies;
    }

}
