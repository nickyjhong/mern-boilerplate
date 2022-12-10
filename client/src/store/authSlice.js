import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'http://localhost:3001/auth'

const token = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

export const login = createAsyncThunk('/auth/login', async({username, password}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const { data } = await axios.post(`${url}/login`, {username, password}, config)
  localStorage.setItem('userToken', data.token)
  return data
})

export const signup = createAsyncThunk('/auth/register', async({ firstName, lastName, username, password}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  await axios.post(`${url}/register`, { firstName, lastName, username, password}, config)
  const { data } = await axios.post(`${url}/login`, {username, password}, config)
  localStorage.setItem('userToken', data.token)
  return data
})

const initialState = {
  loading: false,
  user: null,
  token,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
    // setUser: (state, action) => {
    //   state.user = action.payload.user
    // }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false
      state.user = action.payload.user
      state.token = action.payload.token
    },
    [login.rejected]: (state) => {
      state.loading = false
    },
    [signup.pending]: (state) => {
      state.loading = true
    },
    [signup.fulfilled]: (state, action) => {
      state.loading = false
      state.user = action.payload.user
      state.token = action.payload.token
    },
    [signup.rejected]: (state) => {
      state.loading = false
    }
  }
})

export const { setLogout, setUser } = authSlice.actions

export default authSlice.reducer