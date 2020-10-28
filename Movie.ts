import { Professional } from "./Profesional";
export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharachterName:string;
    public producer:Professional;
    public distributor:string;
    public genre:string;

    constructor(title:string,releaseYear:number,nacionality:string,genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    /**
     * allMovies
     */
    public toString():string {
        // let arrActores:string[] = [];
        // for (let index = 0; index < this.actors.length; index++) {            
        //     arrActores[index] = (this.actors[index].name);
        // }

        return `
        Titulo:  ${this.title} \n
        Año estreno:  ${this.releaseYear} \n
        Actores: ${this.actors} \n
        Nacionaliadd: ${this.nacionality} \n
        Director: ${this.director} \n
        Guionista: ${this.writer} \n
        Idioma: ${this.language} \n
        Plataforma ${this.plataform} \n
        MCU: ${this.mainCharachterName} \n
        Protagonista: ${this.producer} \n
        Disctribuidor: ${this.distributor} \n
        Genero ${this.genre} \n `
    }        

}

let profesional1 = new Professional("Manolo", 33, "Masculino", 89,168,"marron", "azul", "humana", false, "española", 2, "Actor" )
let profesional2 = new Professional("Benito", 34, "Masculino", 95,166,"marron", "marron", "humana", false, "española", 1, "Actor" )
let profesional3 = new Professional("Maria", 31, "Femenino", 82,176,"rubio", "azuñ", "humana", false, "española", 0, "Actor" )
let profesional4 = new Professional("Javier", 39, "Masculino", 92,176,"marron", "azul", "humana", false, "española", 0, "Actor" )
let profesional5 = new Professional("Esther", 28, "Femenino", 65,162,"marron", "verde", "humana", false, "española", 0, "Actor" )
let profesional6 = new Professional("Monica", 38, "Femenino", 84,176,"marron", "azul", "humana", false, "española", 1, "Actor" )
let profesional7 = new Professional("Daniela", 43, "Femenino", 82,172,"rubio", "marron", "humana", false, "española", 0, "Actor" )
let profesional8 = new Professional("Juanjo", 45, "Masculino", 88,176,"rubio", "verde", "humana", false, "española", 0, "Actor" )
let productor = new Professional("Manolo", 33, "Masculino", 82,175,"marron", "marron", "humana", false, "española", 1, "Productor" )
let director = new Professional("Michael", 51, "Masculino", 100,165,"marron", "azul", "humana", true, "inglesa", 2, "Escritor" )
let escritor = new Professional("Jhon", 45, "Masculino", 120,175,"rubio", "azul", "humana", false, "colombiana", 0, "Director" )


let p1:Movie = new Movie("Manolo y Benito The Movie",2021,"Española","Comedia");

p1.actors = [profesional1,profesional2,profesional3,profesional4,profesional5,profesional6,profesional7,profesional8];
p1.director = director;
p1.producer = productor;
p1.writer = escritor;
p1.isMCU = true;
p1.language = "Española";
p1.distributor = "Movie Records";
p1.plataform = "Disney+";

console.log(p1.toString());





