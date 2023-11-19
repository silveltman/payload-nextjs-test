import { Field } from 'payload/types'
import exclude from '../exclude'
import { position, className } from '../variants'
export const video: Field = {
  name: 'video',
  type: 'text',
  admin: {
    condition: (data, siblingData, { user }) => {
      if (siblingData.mediaSource == 'video') return true
      return false
    },
  },
  validate: (val) => {
    if (!val) return true
    let pattern = new RegExp(
      '^https:\\/\\/(www\\.)?vimeo\\.com\\/watch\\?v=[a-zA-Z0-9_-]+$'
    )
    if (pattern.test(val)) return true

    return 'Geen geldige vimeo url'
  },
}
export const videoSettings = {
  name: 'video',
  fields: [exclude, position, className],
}
