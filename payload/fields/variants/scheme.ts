import type { Field } from 'payload/types'

const field: Field = {
  name: 'scheme',
  type: 'select',
  admin: {
    isClearable: true,
  },
  options: ['light', 'dark'],
  validate: (value, { siblingData }) => {
    if (value && !siblingData.hue) return 'Hue is required if scheme is set'
    return true
  },
}

export default field
