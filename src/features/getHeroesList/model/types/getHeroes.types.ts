import { Hero } from '@/entities/Hero'

export type GetHeroesSchema = {
  isLoading: boolean
  error?: string
  data?: Hero[]
}
