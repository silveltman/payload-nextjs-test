import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import slug from '../fields/slug'
import beforeDuplicate from '../hooks/beforeDuplicate'
import title from '../fields/title'

export const policies: CollectionConfig = {
  slug: 'policies',
  labels: {
    singular: 'Beleid',
    plural: 'Beleid',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Pages',
    defaultColumns: ['title', 'status', 'updatedAt'],
    listSearchableFields: ['title'],
    preview: ({ url }: any) => url,
    hooks: {
      beforeDuplicate,
    },
  },
  access: {
    read: () => true,
    update: isAdmin,
    create: isAdmin,
    delete: isAdmin,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Policy',
          fields: [slug, title],
        },
      ],
    },
  ],
}
