import type { Field } from 'payload/types'

const field: Field = {
  name: 'hue',
  type: 'select',
  admin: {
    isClearable: true,
  },
  options: ['base', 'brand', 'accent'],
}

export default field
