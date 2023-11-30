import { Sidebar } from '@/widgets/Sidebar'
import { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex max-h-screen min-h-full">
      <Sidebar />
      <main className="w-full mt-8">{children}</main>
    </div>
  )
}
