import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import { className } from '../variants'

export const writeup: Field = {
  name: 'writeup',
  type: 'richText',
}

export const writeupSettings: Tab = {
  name: 'writeup',
  fields: [exclude, className],
}
