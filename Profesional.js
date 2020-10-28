"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.toString = function () {
        return "Estos son los datos de la persona en cuestion:" + "\n" +
            "zombre: " + this.name + "\n" +
            "edad: " + this.age + "\n" +
            "genero: " + this.genre + "\n" +
            "peso: " + this.weight + "\n" +
            "altura: " + this.height + "\n" +
            "color de pelo" + this.hairColor + "\n" +
            "raza: " + this.race + "\n" +
            "esta retirado?: " + this.isRetired + "\n" +
            "nacionalidad: " + this.isRetired + "\n" +
            "numero de Oscars: " + this.oscarNumber + "\n" +
            "profesion: " + this.profession + "\n";
    };
    return Professional;
}());
exports.Professional = Professional;
