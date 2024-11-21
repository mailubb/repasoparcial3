import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  Houses } from '../../../types'


// Define a type for the slice state
interface HousesState {
  data: Array<Houses>
}

// Define the initial state using that type
const initialState: HousesState = {
  data: [],
}

export const housesSlice = createSlice({
  name: 'houses',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addHouse: (state, action: PayloadAction<Houses | Houses[]>) => {
      const payload = action.payload;

      if (Array.isArray(payload)) state.data.push(...payload);
      else state.data.push(payload);
    },
  },
});

export const {addHouse } = housesSlice.actions
export default housesSlice.reducer