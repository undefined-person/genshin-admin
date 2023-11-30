import { ReactNode } from 'react'

import { cn } from '@/shared/lib/utils'

interface IContainer {
  children: ReactNode
  title?: string
  className?: string
}

export const Container = ({ children, title, className }: IContainer) => {
  return (
    <section className={cn(`py-6 w-full px-4 md:pt-0 md:px-8`, className)}>
      <h2 className="text-3xl font-semibold max-sm:text-xl">{title}</h2>
      <section className="mt-4">{children}</section>
    </section>
  )
}
