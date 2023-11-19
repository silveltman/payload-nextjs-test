import type { Field } from 'payload/types'

const field: Field = {
  name: 'position',
  type: 'radio',
  required: true,
  defaultValue: 'relative',
  options: ['relative', 'background', 'cover'],
}

export default field
