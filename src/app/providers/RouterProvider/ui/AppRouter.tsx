import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../model/routeConfig'
import { MainLayout } from '@/shared/ui/MainLayout.tsx'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map((route) => (
        <Route
          element={route.withLayout ? <MainLayout>{route.element}</MainLayout> : route.element}
          key={route.path}
          path={route.path}
        />
      ))}
    </Routes>
  )
}
