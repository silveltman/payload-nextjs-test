import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import { className } from '../variants'

export const specs: Field = {
  name: 'specs',
  interfaceName: 'Specs',
  type: 'array',
  fields: [
    // {
    //   name: 'icon',
    //   type: 'text',
    // },
    {
      name: 'label',
      type: 'text',
    },
    // description
  ],
}

export const specsSettings: Tab = {
  name: 'specs',
  fields: [exclude, className],
}
