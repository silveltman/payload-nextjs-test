import { CollectionConfig } from 'payload/types'
import beforeDuplicate from '../hooks/beforeDuplicate'
// Access

import { isAdmin } from '../access/isAdmin'
// Blocks
import {
  contactBlock,
  ctaBlock,
  heroBlock,
  postsBlock,
  reviewsBlock,
  servicesBlock,
} from '../blocks'
// Fields
import description from '../fields/description'
import { image } from '../fields/elements/image'
import slug from '../fields/slug'
import title from '../fields/title'

export const posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Pages',
    defaultColumns: ['title', 'status', 'updatedAt'],
    listSearchableFields: ['title', 'tagline', 'description'],
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
          label: 'Post',
          fields: [
            slug,
            image,
            title,
            description,
          ],
        },
      ],
    },
  ],
}
