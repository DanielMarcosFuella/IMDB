

export class Professional{
    public name: string
    public age: number
    public genre: string
    public weight: number
    public height: number
    public hairColor: string
    public eyeColor: string
    public race: string
    public isRetired: boolean
    public nationality: string
    public oscarNumber: number
    public profession: string
    constructor(name: string, age: number,genre: string,weight: number,height: number,hairColor: string,eyeColor: string,
                race: string, isRetired: boolean,nationality: string, oscarNumber: number,profession: string){
        this.name=name
        this.age=age
        this.genre=genre
        this.weight=weight
        this.height=height
        this.hairColor=hairColor
        this.race=race
        this.isRetired=isRetired
        this.nationality=nationality
        this.oscarNumber=oscarNumber
        this.profession=profession
    }
    public toString():string{
        return "Estos son los datos de la persona en cuestion:" + "\n" +
        "zombre: " + this.name + "\n" +
        "edad: " + this.age + "\n" +
        "genero: " + this.genre + "\n" +
        "peso: " + this.weight + "\n" +
        "altura: " + this.height + "\n" +
        "color de pelo" + this.hairColor + "\n" +
        "raza: " +this.race + "\n" +
        "esta retirado?: " + this.isRetired + "\n" +
        "nacionalidad: " + this.isRetired + "\n" +
        "numero de Oscars: " + this.oscarNumber + "\n" +
        "profesion: " + this.profession + "\n" 
    }
}


