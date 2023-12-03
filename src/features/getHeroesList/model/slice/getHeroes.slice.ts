import { createSlice } from '@reduxjs/toolkit'

import { GetHeroesSchema } from '../types/getHeroes.types'
import { fetchHeroes } from '../services/fetchHeroes'

const initialState: GetHeroesSchema = {
  data: [],
  isLoading: false,
  error: undefined,
}

const getHeroesSlice = createSlice({
  name: 'getHeroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchHeroes.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
  },
})

export const { actions: getHeroesActions, reducer: getHeroesReducer } = getHeroesSlice
