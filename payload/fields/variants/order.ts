import type { Field } from 'payload/types'

const field: Field = {
  name: 'order',
  type: 'select',
  admin: {
    isClearable: true,
  },
  options: ['reverse', 'switch'],
}

export default field
