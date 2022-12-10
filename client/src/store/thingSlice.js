import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'http://localhost:3001/things'

export const fetchThings = createAsyncThunk('things/fetchThings', async () => {
  const { data } = await axios.get(url)
  return data
})

const initialState = {
  things: [],
  isLoading: null,
}

export const thingSlice = createSlice({
  name: 'thing',
  initialState,
  // reducers: {
  //   getThings: (state, action) => {
  //     state.things = action.payload
  //   }
  // },
  extraReducers: {
    [fetchThings.pending]: (state) => {
      state.isLoading = true 
    },
    [fetchThings.fulfilled]: (state, action) => {
      state.things = action.payload
      state.isLoading = false
    },
    [fetchThings.rejected]: (state) => {
      state.isLoading = false
    }
  }
})

// export const { getThings } = thingSlice.actions

export default thingSlice.reducer