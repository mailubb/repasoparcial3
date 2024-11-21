import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Spells } from '../../../types'


// Define a type for the slice state
interface SpellsState {
  data: Array<Spells>
}

// Define the initial state using that type
const initialState: SpellsState = {
  data: [],
}

export const spellsSlice = createSlice({
  name: 'spells',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addSpell: (state, action: PayloadAction<Spells | Spells[]>) => {
      const payload = action.payload;

      if (Array.isArray(payload)) state.data.push(...payload);
      else state.data.push(payload);
    },
  },
});

export const {addSpell } = spellsSlice.actions
export default spellsSlice.reducer