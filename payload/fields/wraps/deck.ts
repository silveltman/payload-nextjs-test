import { Tab } from 'payload/types'
import { className, layout, size } from '../variants'

export const deckSettings: Tab = {
  name: 'deck',
  fields: [
    layout({
      options: ['grid', 'carousel', 'masonry', 'row'],
      defaultValue: 'grid',
    }),
    size,
    className,
  ],
}
