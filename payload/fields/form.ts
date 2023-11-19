import type { Field, Tab } from 'payload/types'
import exclude from './exclude'
import { className } from './variants'

export const form: Field = {
  name: 'form',
  type: 'relationship',
  relationTo: 'forms',
  required: true,
}

export const formSettings: Tab = {
  name: 'form',
  fields: [exclude, className],
}
