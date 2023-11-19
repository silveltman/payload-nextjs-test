import { Tab } from 'payload/types'
import exclude from '../exclude'
import { className, hue, layout, scheme, size } from '../variants'

export const listSettings: Tab = {
  name: 'list',
  fields: [
    exclude,
    layout({
      options: ['col', 'row'],
      defaultValue: 'col',
    }),
    size,
    scheme,
    hue,
    className,
  ],
}
