import { Tab } from 'payload/types'
import exclude from '../exclude'
import { className, hue, layout, size, x, y } from '../variants'

export const segmentSettings: Tab = {
  name: 'segment',
  fields: [
    exclude,
    layout({
      options: ['col', 'row'],
      defaultValue: 'col',
    }),
    x({
      options: ['start', 'center', 'between'],
      defaultValue: 'start',
    }),
    y({
      options: ['start', 'center', 'end'],
      defaultValue: 'start',
    }),
    hue,
    size,
    className,
  ],
}
