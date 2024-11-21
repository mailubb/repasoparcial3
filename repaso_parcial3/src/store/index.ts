import { configureStore } from '@reduxjs/toolkit' //importamos el store
// ...
import booksReducer from './slices/Book/slice' //importamos el slice de books
import charactersReducer from './slices/Characters/slice' //importamos el slice de characters
import spellsReducer from './slices/Spells/slice' //importamos el slice de spells   
import housesReducer from './slices/Houses/slice' //importamos el slice de houses

export const store = configureStore({
  reducer: {
    books: booksReducer,
    characters: charactersReducer,
    spells: spellsReducer,
    houses: housesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch