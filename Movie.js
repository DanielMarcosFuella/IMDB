"use strict";
exports.__esModule = true;
exports.Movie = void 0;
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    /**
     * allMovies
     */
    Movie.prototype.toString = function () {
        // let arrActores:string[] = [];
        // for (let index = 0; index < this.actors.length; index++) {            
        //     arrActores[index] = (this.actors[index].name);
        // }
        return "\n        Titulo:  " + this.title + " \n\n        A\u00F1o estreno:  " + this.releaseYear + " \n\n        Actores: " + this.actors + " \n\n        Nacionaliadd: " + this.nacionality + " \n\n        Director: " + this.director + " \n\n        Guionista: " + this.writer + " \n\n        Idioma: " + this.language + " \n\n        Plataforma " + this.plataform + " \n\n        MCU: " + this.mainCharachterName + " \n\n        Protagonista: " + this.producer + " \n\n        Disctribuidor: " + this.distributor + " \n\n        Genero " + this.genre + " \n ";
    };
    return Movie;
}());
exports.Movie = Movie;
