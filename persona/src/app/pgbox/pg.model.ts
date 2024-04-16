export class pgCard {
    name: string;
    prevIMG_path: string;
    fullIMG_path: string;
    description: string; 
    constructor(name: string,  prevIMG_path: string, fullIMG_path: string, description: string) {
        this.name = name;
        this.prevIMG_path = prevIMG_path;
        this.fullIMG_path = fullIMG_path;
        this.description = description; 
    }
}