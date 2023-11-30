export enum AppRoutes {
  ADD_HERO = 'add-hero',
  HEROES = 'heroes',
}
export const getAddHeroRoute = () => `/${AppRoutes.ADD_HERO}`
export const getHeroesRoute = () => `/${AppRoutes.HEROES}`
