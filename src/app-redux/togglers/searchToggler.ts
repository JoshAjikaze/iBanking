import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MenuState {
  value: boolean
}

const initialState: MenuState = {
  value: false,
}

export const searchSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    showSearch: (state) => {
      if (state.value === false) {
        state.value = true
      } else {
        state.value = false
      }
    },
    hideSearch: (state) => {
      state.value = false
    },
  },
})


// Action creators are generated for each case reducer function
export const { showSearch, hideSearch } = searchSlice.actions


export default searchSlice