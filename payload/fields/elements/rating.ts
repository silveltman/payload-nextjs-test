import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import { className } from '../variants'

const field: Field = {
  name: 'rating',
  type: 'number',
  min: 0,
  max: 5,
}

export const ratingSettings: Tab = {
  name: 'rating',
  fields: [exclude, className],
}

export default field
