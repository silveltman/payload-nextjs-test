import type { Field } from 'payload/types'

const field: Field = {
  name: 'price',
  type: 'group',
  fields: [
    {
      name: 'amount',
      type: 'number',
    },
    {
      name: 'currency',
      type: 'select',
      defaultValue: 'EUR',
      options: [
        {
          label: 'Euro',
          value: 'EUR',
        },
      ],
    },
  ],
}

export default field
