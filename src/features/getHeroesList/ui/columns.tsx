import { ColumnDef } from '@tanstack/react-table'

import { Hero } from '@/entities/Hero'

export const columns: ColumnDef<Hero>[] = [
  {
    accessorKey: '_id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'image',
    header: 'Image',
  },
]
