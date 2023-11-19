import { GlobalConfig, Tab } from 'payload/types'
import {
  buttons,
  buttonsSettings,
  links,
  linksSettings,
} from '../fields/elements'
import { className, frame, hue, look, scheme, size } from '../fields/variants'
import { groupSettings, listSettings } from '../fields/wraps'

export const header: GlobalConfig = {
  slug: 'header',
  admin: {
    group: 'Data',
  },
  versions: true,
  access: {
    read: () => true,
  },
  fields: [links, buttons],
}

export const headerSettings: Tab = {
  name: 'header',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'header',
          fields: [
            frame({
              options: ['fill', 'float', 'panel'],
              defaultValue: 'fill',
            }),
            look({
              options: ['outline', 'surface', 'soft'],
              defaultValue: 'outline',
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
        buttonsSettings,
      ],
    },
  ],
}
