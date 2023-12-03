import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { CombinedState } from 'redux'
import { AxiosInstance } from 'axios'

import { GetHeroesSchema } from '@/features/getHeroesList'

export type StateSchema = {
  getHeroes?: GetHeroesSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export type ThunkExtraArg = {
  api: AxiosInstance
}

export type ThunkConfig<T> = {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
