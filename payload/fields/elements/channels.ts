import type { Field, Tab } from 'payload/types'
import { className, hue, look, scheme } from '../variants'

export const channels: Field = {
  name: 'channels',
  type: 'group',
  fields: [
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'phone',
      type: 'number',
    },
    {
      name: 'whatsapp',
      type: 'number',
    },
    {
      name: 'address',
      type: 'text',
    },
  ],
}

export const channelsSettings: Tab = {
  name: 'channels',
  fields: [
    hue,
    scheme,
    look({
      options: ['solid', 'soft', 'surface', 'outline', 'ghost'],
      defaultValue: 'solid',
    }),
    className,
  ],
}
