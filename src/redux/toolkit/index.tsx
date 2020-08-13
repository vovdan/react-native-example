import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

export const memes = createSlice({
  name: 'memes',
  initialState: [],
  reducers: {
    loadMems: (state, action) => {
      let newState = [];
      for (let i = 0; i < action.payload.length; i++) {
        newState.push({ memUrl: action.payload[i].memUrl, id: action.payload[i].id })
      }
      return newState;
    }
  }
})
