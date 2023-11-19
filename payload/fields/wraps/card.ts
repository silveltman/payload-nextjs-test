import { Tab } from 'payload/types'
import { className, frame, hue, look, scheme } from '../variants'

export const cardSettings: Tab = {
  name: 'card',
  fields: [
    frame({
      options: ['panel', 'fill'],
      defaultValue: 'panel',
    }),
    look({
      options: ['soft', 'surface', 'outline', 'ghost'],
      defaultValue: 'soft',
    }),
    hue,
    scheme,
    className,
  ],
}
