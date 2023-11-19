import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import beforeDuplicate from '../hooks/beforeDuplicate'
import { image, socials } from '../fields/elements'

export const employees: CollectionConfig = {
  slug: 'employees',
  access: {
    read: () => true,
    update: isAdmin,
    create: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Data',
    listSearchableFields: ['name', 'tagline'],
    hooks: {
      beforeDuplicate,
    },
  },
  versions: {
    drafts: true,
  },
  fields: [
    image,
    {
      type: 'text',
      name: 'name',
    },
    {
      type: 'text',
      name: 'tagline',
    },
    {
      type: 'textarea',
      name: 'description',
    },
    {
      type: 'array',
      name: 'socials',
      fields: [
        {
          type: 'select',
          name: 'social',
          options: socials,
        },
        {
          type: 'text',
          name: 'link',
        },
      ],
    },
  ],
}
