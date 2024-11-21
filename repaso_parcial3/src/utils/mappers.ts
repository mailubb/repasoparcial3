import { CardProps } from "../components/Card/Card";
import { Book, Characters, DataType, Houses, Spells } from "../types";

export const BookToCard = (book: Book): CardProps => {
  return {
    meta: [`number: ${book.number}`, `date: ${book.releaseDate}`],
    title: book.title,
    img: book.cover,
  };
};

export const CharacterToCard = (character: Characters): CardProps => {
  return {
    meta: [`house: ${character.hogwartsHouse}`, `date: ${character.birthdate}`],
    title: character.fullName,
    img: character.image,
  };
};

export const HouseToCard = (house: Houses): CardProps => {
  return {
    meta: [`${house.emoji}`, `founder: ${house.founder}`],
    title: house.house,
  };
};

export const SpellToCard = (spell: Spells): CardProps => {
  return {
    meta: [`${spell.use}`],
    title: spell.spell,
  };
};

export const mapper: Record<DataType, (p: any) => CardProps> = {
  books: BookToCard,
  characters: CharacterToCard,
  houses: HouseToCard,
  spells: SpellToCard,
};
