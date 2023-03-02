import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.value = true
    },
    hideSidebar: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showSidebar, hideSidebar} = counterSlice.actions

export default counterSlice