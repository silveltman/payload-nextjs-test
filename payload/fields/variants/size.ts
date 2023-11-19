import type { Field } from 'payload/types'

const field: Field = {
  name: 'size',
  type: 'select',
  admin: {
    isClearable: true,
  },
  options: ['small', 'medium', 'large'],
}

export default field
