import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import label from '../label'
import { className } from '../variants'

export const person: Field = {
  name: 'person',
  interfaceName: 'Person',
  type: 'group',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    label,
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'images',
    },
  ],
}

export const personSettings: Tab = {
  name: 'person',
  fields: [exclude, className],
}
