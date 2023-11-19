import { GlobalConfig, Tab } from 'payload/types'
import {
  channelsSettings,
  linksSettings,
  socialsSettings,
} from '../fields/elements'
import { links } from '../fields/elements/links'
import { className, frame, hue, scheme, size, look } from '../fields/variants'
import { groupSettings, listSettings } from '../fields/wraps'
export const footer: GlobalConfig = {
  slug: 'footer',
  admin: {
    group: 'Data',
  },
  versions: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 0,
      maxRows: 4,
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        links,
      ],
    },
    {
      name: 'policies',
      type: 'relationship',
      relationTo: 'policies',
      hasMany: true,
      maxRows: 4,
    },
  ],
}

export const footerSettings: Tab = {
  name: 'footer',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'footer',
          fields: [
            frame({
              options: ['fill', 'float', 'panel'],
              defaultValue: 'fill',
            }),
            look({
              options: ['ghost', 'outline', 'soft', 'surface', 'solid'],
              defaultValue: 'ghost',
            }),
            size,
            hue,
            scheme,
            className,
          ],
        },
        listSettings,
        linksSettings,
        groupSettings,
        channelsSettings,
        socialsSettings,
      ],
    },
  ],
}
