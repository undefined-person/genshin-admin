import { Container } from '@/shared/ui/Container'

import { GetHeroesList } from '@/features/getHeroesList'

export const HeroesPage = () => {
  return (
    <Container title="Heroes">
      <GetHeroesList />
    </Container>
  )
}
