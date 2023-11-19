import { GlobalConfig } from 'payload/types'
import { channels } from '../fields/elements/channels'
import { socials } from '../fields/elements/socials'

export const company: GlobalConfig = {
  slug: 'company',
  admin: {
    group: 'Data',
  },
  versions: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'images',
    },
    {
      name: 'kvk',
      type: 'number',
    },
    channels,
    {
      name: 'socials',
      type: 'array',
      fields: [
        {
          name: 'social',
          type: 'select',
          options: socials,
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
  ],
}
