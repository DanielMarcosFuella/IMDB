import { Professional } from "./Profesional";
import { Movie } from "./Movie";
import * as fs from 'fs'
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });



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
        let pelisParse:IMDB = new IMDB([])
        pelisParse.movies= JSON.parse(raw);
        return pelisParse;
    }

    /**
     * name
     */
    public crearPelicula() {
        // rl.question('¿Como se llama la peli? ', (title:string) => {
        //     rl.question('¿Año de lanzamiento? ', (releaseYear:number) => {
        //         rl.question('¿Origen? ', (nacionality:string) => {
        //             rl.question('¿Genero? ', (genre:string) => {
        //                 let p1:Movie = new Movie(title,releaseYear,nacionality,genre)                        
        //                 let yelmo = this.obtenerInstanciaIMDB("cinesa.json");
        //                 yelmo.movies.push(p1);
        //                 this.escribirEnFicheroJSON("yelmo.json");                        
        //                 rl.close();
        //             });
        //         });
        //     });
        // });
            
    }

}
