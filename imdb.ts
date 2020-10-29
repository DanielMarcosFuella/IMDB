import { Professional } from "./Profesional";
import { Movie } from "./Movie";
import * as fs from 'fs'


export class IMDB {

    public movies:Movie[];
    constructor(movies:Movie[]) {
        this.movies = movies;
    }


    /**
     * escribirEnFicheroJSON
    @nombreFichero -->Nombre del fichero ,ej: "imdbBBDD.json"    */
    public escribirEnFicheroJSON(nombreFichero:string) {
        fs.writeFileSync(nombreFichero,JSON.stringify(this.movies));
    }

        /**
     * escribirEnFicheroJSON
    @nombreFichero -->Nombre del fichero ,ej: "imdbBBDD.json"    */
    public obtenerInstanciaIMDB(nombreFichero:string):IMDB {
        let raw = fs.readFileSync(nombreFichero,{encoding:'utf-8', flag:'r'});
        let pelisParse:IMDB = JSON.parse(raw);
        return pelisParse;
    }

}
