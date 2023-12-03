import { StateSchema } from '@/app/providers/StoreProvider'

export const getHeroesList = (state: StateSchema) => state.getHeroes?.data
