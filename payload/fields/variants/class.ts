import type { Field } from 'payload/types'

const field: Field = {
  type: 'row',
  fields: [
    { name: 'class', type: 'textarea' },
    {
      name: 'className',
      type: 'textarea',
      hooks: {
        beforeChange: [
          ({ value, siblingData }) => {
            if (!value) return siblingData.class
          },
        ],
      },
    },
  ],
}

export default field
