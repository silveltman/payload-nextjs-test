import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import {
  contentBlock,
  ctaBlock,
  featuresBlock,
  heroBlock,
  offersBlock,
  reviewsBlock,
  servicesBlock,
} from '../blocks'
import blocks from '../fields/blocks'
import description from '../fields/description'
import { image } from '../fields/elements/image'
import beforeDuplicate from '../hooks/beforeDuplicate'
import slug from '../fields/slug'
import title from '../fields/title'

export const services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Dienst',
    plural: 'Diensten',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Pages',
    defaultColumns: ['title', 'status', 'updatedAt'],
    listSearchableFields: ['title', 'description'],
    preview: ({ url }: any) => url,
    hooks: {
      beforeDuplicate,
    },
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    update: isAdmin,
    create: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Info',
          fields: [title, description, image],
        },
        {
          label: 'Page',
          fields: [
            slug,
            {
              name: 'type',
              type: 'radio',
              required: true,
              defaultValue: 'blocks',
              options: ['blocks', 'rich'],
            },
            blocks([
              contentBlock,
              ctaBlock,
              heroBlock,
              offersBlock,
              reviewsBlock,
              servicesBlock,
              featuresBlock,
            ]),
          ],
        },
      ],
    },
  ],
}
