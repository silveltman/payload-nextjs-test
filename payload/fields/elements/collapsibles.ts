import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import { className } from '../variants'

export const collapsibles: Field = {
  name: 'collapsibles',
  interfaceName: 'Collapsibles',
  type: 'array',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'text',
      type: 'textarea',
    },
  ],
}

export const collapsibleSettings: Tab = {
  name: 'collapsibles',
  fields: [exclude, className],
}
