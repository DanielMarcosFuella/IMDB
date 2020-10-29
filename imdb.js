"use strict";
exports.__esModule = true;
exports.IMDB = void 0;
var fs = require("fs");
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
        var pelisParse = JSON.parse(raw);
        return pelisParse;
    };
    return IMDB;
}());
exports.IMDB = IMDB;
