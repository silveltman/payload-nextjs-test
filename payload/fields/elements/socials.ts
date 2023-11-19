import type { Option, Tab } from 'payload/types'
import { className, hue, look, scheme, size } from '../variants'

export const socials: Option[] = [
  'facebook',
  'twitter',
  'instagram',
  'linkedin',
  'snapchat',
  'youtube',
  'tiktok',
  'pinterest',
]

export const socialsSettings: Tab = {
  name: 'socials',
  fields: [
    hue,
    scheme,
    size,
    look({
      options: ['solid', 'soft', 'surface', 'outline', 'ghost'],
      defaultValue: 'solid',
    }),
    className,
  ],
}
