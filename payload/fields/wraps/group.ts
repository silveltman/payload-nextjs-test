import { Tab } from 'payload/types'
import exclude from '../exclude'
import { className, hue, layout, scheme, size, x, y } from '../variants'

export const groupSettings: Tab = {
  name: 'group',
  fields: [
    exclude,
    layout({
      options: ['row', 'col'],
      defaultValue: 'row',
    }),
    x({
      options: ['stretch', 'start', 'center', 'end'],
      defaultValue: 'stretch',
    }),
    y({
      options: ['start', 'center', 'end'],
      defaultValue: 'start',
    }),
    size,
    scheme,
    hue,
    className,
  ],
}
