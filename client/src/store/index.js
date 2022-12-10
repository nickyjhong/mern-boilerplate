import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import thingReducer from './thingSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    thing: thingReducer
  },
})
