export type DataType = "characters" | "houses" | "spells" | "books";

export interface Characters {
fullName: string
nickname: string
hogwartsHouse: string
children: Array<string> //aqui el le pone esto, antes era object, pero como vio que era un arreglo de strings, lo cambio
image: string
birthdate: string;
}

export interface Houses {
    house:string	
    emoji:	string	
    founder:string	
    colors:	Array<string>	
    animal: string
}

export interface Spells {
    spell: string
    use: string
}

export interface Book {
    number: number
    title: string
    originalTitle:string	
    releaseDate	:string	
    description	:string
    pages:number	
    cover:string
}