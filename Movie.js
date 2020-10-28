"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Profesional_1 = require("./Profesional");
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
    Movie.prototype.allMovies = function () {
        // let arrActores:string[] = [];
        // for (let index = 0; index < this.actors.length; index++) {            
        //     arrActores[index] = (this.actors[index].name);
        // }
        return "\n        Titulo:  " + this.title + " \n\n        A\u00F1o estreno:  " + this.releaseYear + " \n\n        Actores: " + this.actors + " \n\n        Nacionaliadd: " + this.nacionality + " \n\n        Director: " + this.director + " \n\n        Guionista: " + this.writer + " \n\n        Idioma: " + this.language + " \n\n        Plataforma " + this.plataform + " \n\n        MCU: " + this.mainCharachterName + " \n\n        Protagonista: " + this.producer + " \n\n        Disctribuidor: " + this.distributor + " \n\n        Genero " + this.genre + " \n ";
    };
    return Movie;
}());
exports.Movie = Movie;
var profesional1 = new Profesional_1.Professional("Manolo", 33, "Masculino", 89, 168, "marron", "azul", "humana", false, "española", 2, "Actor");
var profesional2 = new Profesional_1.Professional("Benito", 34, "Masculino", 95, 166, "marron", "marron", "humana", false, "española", 1, "Actor");
var profesional3 = new Profesional_1.Professional("Maria", 31, "Femenino", 82, 176, "rubio", "azuñ", "humana", false, "española", 0, "Actor");
var profesional4 = new Profesional_1.Professional("Javier", 39, "Masculino", 92, 176, "marron", "azul", "humana", false, "española", 0, "Actor");
var profesional5 = new Profesional_1.Professional("Esther", 28, "Femenino", 65, 162, "marron", "verde", "humana", false, "española", 0, "Actor");
var profesional6 = new Profesional_1.Professional("Monica", 38, "Femenino", 84, 176, "marron", "azul", "humana", false, "española", 1, "Actor");
var profesional7 = new Profesional_1.Professional("Daniela", 43, "Femenino", 82, 172, "rubio", "marron", "humana", false, "española", 0, "Actor");
var profesional8 = new Profesional_1.Professional("Juanjo", 45, "Masculino", 88, 176, "rubio", "verde", "humana", false, "española", 0, "Actor");
var productor = new Profesional_1.Professional("Manolo", 33, "Masculino", 82, 175, "marron", "marron", "humana", false, "española", 1, "Productor");
var director = new Profesional_1.Professional("Michael", 51, "Masculino", 100, 165, "marron", "azul", "humana", true, "inglesa", 2, "Escritor");
var escritor = new Profesional_1.Professional("Jhon", 45, "Masculino", 120, 175, "rubio", "azul", "humana", false, "colombiana", 0, "Director");
var p1 = new Movie("Manolo y Benito The Movie", 2021, "Española", "Comedia");
p1.actors = [profesional1, profesional2, profesional3, profesional4, profesional5, profesional6, profesional7, profesional8];
p1.director = director;
p1.producer = productor;
p1.writer = escritor;
p1.isMCU = true;
p1.language = "Española";
p1.distributor = "Movie Records";
p1.plataform = "Disney+";
console.log(p1.allMovies());
