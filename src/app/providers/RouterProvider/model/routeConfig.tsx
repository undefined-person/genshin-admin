import { HeroesPage } from '@/pages/HeroesPage'
import { AddHeroPage } from '@/pages/AddHeroPage'

import { AppRoutes, getAddHeroRoute, getHeroesRoute } from '@/shared/const/router'
import { AppRoutesProps } from '@/shared/types/router.types'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ADD_HERO]: {
    path: getAddHeroRoute(),
    element: <AddHeroPage />,
    withLayout: true,
  },
  [AppRoutes.HEROES]: {
    path: getHeroesRoute(),
    element: <HeroesPage />,
    withLayout: true,
  },
}
