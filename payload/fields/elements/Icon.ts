import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import { className } from '../variants'

export const icon: Field = {
  name: 'icon',
  type: 'text',
  admin: {
    components: {
      // Field: IconSelect,
    },
  },
}

export const iconSettings: Tab = {
  name: 'Icon',
  fields: [exclude, className],
}
