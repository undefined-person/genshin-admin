import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { DataTable } from '@/shared/ui/DataTable.tsx'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx'
import { getHeroesReducer } from '@/features/getHeroesList'
import { getHeroesList } from '../model/selectors/getHeroesList.selector'
import { fetchHeroes } from '../model/services/fetchHeroes'
import { columns } from './columns'

const reducers: ReducersList = {
  getHeroes: getHeroesReducer,
}

export const GetHeroesList = () => {
  const dispatch = useAppDispatch()
  const data = useSelector(getHeroesList)

  useEffect(() => {
    dispatch(fetchHeroes())
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers}>{data && <DataTable columns={columns} data={data} />}</DynamicModuleLoader>
  )
}
