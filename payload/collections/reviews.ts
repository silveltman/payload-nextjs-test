import { CollectionConfig } from 'payload/types'
// Access
import { isAdmin } from '../access/isAdmin'
// Blocks
import {
  contactBlock,
  contentBlock,
  ctaBlock,
  heroBlock,
  postsBlock,
  reviewsBlock,
  servicesBlock,
} from '../blocks'
// Fields
import blocks from '../fields/blocks'
import description from '../fields/description'
import { image } from '../fields/elements/image'
import beforeDuplicate from '../hooks/beforeDuplicate'
import { person } from '../fields/elements/person'
import rating from '../fields/elements/rating'
import title from '../fields/title'

export const reviews: CollectionConfig = {
  slug: 'reviews',
  labels: {
    singular: 'Review',
    plural: 'Reviews',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Data',
    defaultColumns: ['title', 'status', 'updatedAt'],
    listSearchableFields: ['title', 'tagline', 'description'],
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
          fields: [
            title,
            description,
            image,
            rating,
            person,
            {
              name: 'author',
              type: 'group',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                },
                {
                  name: 'tagline',
                  type: 'text',
                },
                {
                  name: 'avatar',
                  type: 'upload',
                  relationTo: 'images',
                },
              ],
            },
          ],
        },
        {
          label: 'Page',
          fields: [
            blocks([
              contactBlock,
              contentBlock,
              ctaBlock,
              heroBlock,
              postsBlock,
              reviewsBlock,
              servicesBlock,
            ]),
          ],
        },
      ],
    },
  ],
}
