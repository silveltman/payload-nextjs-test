import type { Field } from 'payload/types'

const field: Field = {
  type: 'row',
  fields: [
    {
      name: 'hrefSource',
      type: 'radio',
      options: ['doc', 'href'],
      defaultValue: 'doc',
      admin: {
        width: '100%',
      },
    },
    {
      name: 'doc',
      type: 'relationship',
      relationTo: ['pages', 'posts', 'services', 'policies'],
      admin: {
        width: '100%',
        allowCreate: false,
        condition: (_, siblingData) => siblingData?.hrefSource === 'doc',
      },
      filterOptions: {
        slug: { exists: true },
      },
    },
    {
      name: 'href',
      type: 'text',
      admin: {
        width: '100%',
        condition: (_, siblingData) => siblingData?.hrefSource === 'href',
      },
    },
  ],
}

export default field
