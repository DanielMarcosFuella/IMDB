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






