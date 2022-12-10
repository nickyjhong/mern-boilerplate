import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: null,
  token: null,
}

// export const login = createAsyncThunk('/auth/login', async() => {
//   const { data } = await 
// })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer