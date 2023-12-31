import { CollectionConfig } from 'payload/types'
import beforeDuplicate from '../hooks/beforeDuplicate'
import { isAdmin } from '../access/isAdmin'
import {
  contactBlock,
  contentBlock,
  ctaBlock,
  employeesBlock,
  featuresBlock,
  heroBlock,
  logosBlock,
  offersBlock,
  postsBlock,
  reviewsBlock,
  servicesBlock,
  statsBlock,
  bookingBlock,
} from '../blocks'

import { imagesBlock } from '../blocks/imagesBlock'
import blocks from '../fields/blocks'
import slug from '../fields/slug'

export const pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'slug',
    group: 'Pages',
    defaultColumns: ['slug', 'status', 'updatedAt'],
    listSearchableFields: ['slug'],
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
          label: 'Page',
          fields: [
            // slug,
            {
              name: 'type',
              type: 'radio',
              required: true,
              defaultValue: 'blocks',
              options: ['blocks', 'rich'],
            },
            blocks([
              contactBlock,
              contentBlock,
              ctaBlock,
              featuresBlock,
              heroBlock,
              imagesBlock,
              logosBlock,
              offersBlock,
              postsBlock,
              reviewsBlock,
              servicesBlock,
              statsBlock,
              employeesBlock,
              bookingBlock,
            ]),
          ],
        },
      ],
    },
  ],
}
