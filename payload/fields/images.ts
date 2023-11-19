import type { Field } from 'payload/types'

const field: Field = {
  name: 'images',
  type: 'array',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'images',
      required: true,
    },
  ],
}

export default field
