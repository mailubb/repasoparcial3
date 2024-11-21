import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Book } from '../../../types'


// Define a type for the slice state
interface BooksState {
  data: Array<Book>
}

// Define the initial state using that type
const initialState: BooksState = {
  data: [],
}

export const booksSlice = createSlice({
  name: 'books',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book | Book[]>) => {
      const payload = action.payload;

      if (Array.isArray(payload)) state.data.push(...payload);
      else state.data.push(payload);
    },
  },
});

export const {addBook } = booksSlice.actions
export default booksSlice.reducer