import { List, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

import { getAddHeroRoute, getHeroesRoute } from '@/shared/const/router'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/Accordion'

export const Sidebar = () => {
  return (
    <aside className="z-40 w-64 h-screen  bg-white" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Accordion type="multiple">
          <AccordionItem value="users" className="border-none">
            <AccordionTrigger>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Heroes</span>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                to={getHeroesRoute()}
                className="flex items-center gap-2 w-full p-2 text-gray-900 rounded-lg pl-6 hover:bg-gray-100">
                <List />
                <span>Heroes</span>
              </Link>
              <Link
                to={getAddHeroRoute()}
                className="flex items-center gap-2 w-full p-2 text-gray-900 rounded-lg pl-6 hover:bg-gray-100">
                <Plus />
                <span>Add Hero</span>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  )
}
