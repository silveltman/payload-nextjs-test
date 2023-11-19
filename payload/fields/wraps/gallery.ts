import { Tab } from 'payload/types'
import { className, layout, size } from '../variants'

export const gallerySettings: Tab = {
  name: 'gallery',
  fields: [
    layout({
      options: ['grid', 'carousel', 'masonry', 'row'],
      defaultValue: 'grid',
    }),
    size,
    className,
  ],
}
