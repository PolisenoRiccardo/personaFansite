export class pgCard {
    name: string;
    prevIMG_path: string;
    fullIMG_path: string;
    description: string;
    game: string;
    date: string;
    height: Number;

    constructor(name: string,  prevIMG_path: string, fullIMG_path: string, game:string, date: string, height:Number, description: string) {
        this.name = name;
        this.prevIMG_path = prevIMG_path;
        this.fullIMG_path = fullIMG_path;
        this.description = description; 
        this.game = game;
        this.date = date;
        this.height = height;
    }
}