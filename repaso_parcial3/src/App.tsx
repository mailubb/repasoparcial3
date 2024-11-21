import './App.css'
import {Section} from '../src/components/section/Section'
import { useAppSelector, useAppDispatch } from './hooks/storeHook'
import { useEffect } from 'react'
import { getApiContent } from './service/getData'
import { Book, Characters, Houses, Spells } from './types'
import { addBook } from './store/slices/Book/slice'
import { addCharacter } from './store/slices/Characters/slice'
import { addHouse } from './store/slices/Houses/slice'
import { addSpell } from './store/slices/Spells/slice'

function App() {
  const books = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()
  console.log(books) //PARA VER SI ME TRAE LA LISTA VACIA DEL ESTADO GLOBAL
  
  const getData = async () => {
    
      const books = getApiContent<Book>("books");
      const characters = getApiContent<Characters>("characters");
      const houses = getApiContent<Houses>("houses");
      const spells = getApiContent<Spells>("spells");
    console.log(books)
    
    const response = await Promise.all([books, characters, houses, spells]);
    dispatch(addBook(response[0]));
    dispatch(addCharacter(response[1]));
    dispatch(addHouse(response[2]));
    dispatch(addSpell(response[3]));
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1>Potter API</h1>
      <Section dataId="characters"></Section>
      <Section dataId="books"></Section>
      <Section dataId="houses"></Section>
      <Section dataId="spells"></Section>
    </>
  )
}


export default App
