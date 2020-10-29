"use strict";
exports.__esModule = true;
exports.IMDB = void 0;
var fs = require("fs");
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
var IMDB = /** @class */ (function () {
    function IMDB(movies) {
        this.movies = movies;
    }
    /**
     * escribirEnFicheroJSON
    @nombreFichero -->Nombre del fichero ,ej: "imdbBBDD.json"    */
    IMDB.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        fs.writeFileSync(nombreFichero, JSON.stringify(this.movies));
    };
    /**
 * escribirEnFicheroJSON
@nombreFichero -->Nombre del fichero ,ej: "imdbBBDD.json"    */
    IMDB.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var raw = fs.readFileSync(nombreFichero, { encoding: 'utf-8', flag: 'r' });
        var pelisParse = new IMDB([]);
        pelisParse.movies = JSON.parse(raw);
        return pelisParse;
    };
    /**
     * name
     */
    IMDB.prototype.crearPelicula = function () {
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
    };
    return IMDB;
}());
exports.IMDB = IMDB;
