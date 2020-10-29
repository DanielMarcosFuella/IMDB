"use strict";
exports.__esModule = true;
var Profesional_1 = require("./Profesional");
var Movie_1 = require("./Movie");
var imdb_1 = require("./imdb");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
var p1 = new Movie_1.Movie("Manolo y Benito The Movie", 2021, "Española", "Comedia");
var p2 = new Movie_1.Movie("Manolo y Benito Contratacan ", 2022, "Española", "Comedia");
p1.actors = [profesional1, profesional2];
p1.director = director;
p1.producer = productor;
p1.writer = escritor;
p1.isMCU = true;
p1.language = "Española";
p1.distributor = "Movie Records";
p1.plataform = "Disney+";
p2.actors = [profesional1, profesional2, profesional5];
p2.director = director;
p2.producer = productor;
p2.writer = escritor;
p2.isMCU = true;
p2.language = "Española";
p2.distributor = "Movie Records";
p2.plataform = "Netflix";
var arrMovies = [p1, p2];
var cinesa = new imdb_1.IMDB(arrMovies);
console.log(cinesa);
console.log(cinesa.movies);
console.log(0);
// cinesa.escribirEnFicheroJSON("cinesa.json");
// console.log(cinesa.obtenerInstanciaIMDB("cinesa.json"));
rl.question('¿Como se llama la peli? ', function (title) {
    rl.question('¿Año de lanzamiento? ', function (releaseYear) {
        rl.question('¿Origen? ', function (nacionality) {
            rl.question('¿Genero? ', function (genre) {
                var p1 = new Movie_1.Movie(title, releaseYear, nacionality, genre);
                var yelmo = cinesa.obtenerInstanciaIMDB("cinesa.json");
                // cinesa.escribirEnFicheroJSON("test.json");     
                yelmo.movies.push(p1);
                yelmo.escribirEnFicheroJSON("cinesa.json");
                console.log(yelmo);
                console.log(yelmo.movies);
                rl.close();
            });
        });
    });
});
