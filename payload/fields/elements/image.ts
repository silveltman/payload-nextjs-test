import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import { className, position } from '../variants'

export const image: Field = {
  name: 'image',
  type: 'upload',
  relationTo: 'images',
  admin: {
    condition: (data, siblingData, { user }) => {
      if (siblingData.mediaSource != 'video') return true
      return false
    },
  },
}

export const imageSettings: Tab = {
  name: 'image',
  fields: [exclude, position, className],
}
