import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Characters } from '../../../types'


// Define a type for the slice state
interface CharactersState {
  data: Array<Characters>
}

// Define the initial state using that type
const initialState: CharactersState = {
  data: [],
}

export const charactersSlice = createSlice({
  name: 'characters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Characters | Characters[]>) => {
      const payload = action.payload;

      if (Array.isArray(payload)) state.data.push(...payload);
      else state.data.push(payload);
    },
  },
});

export const {addCharacter } = charactersSlice.actions
export default charactersSlice.reducer