import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Hero } from '@/entities/Hero'

type FetchHeroesResponse = {
  data: Hero[]
  message: string
}

export const fetchHeroes = createAsyncThunk<Hero[], void, ThunkConfig<string>>(
  'getHeroes/fetchHeroes',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.get<FetchHeroesResponse>('/hero')

      return data.data
    } catch (error: unknown) {
      return rejectWithValue('Something went wrong')
    }
  },
)
