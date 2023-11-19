import { Field } from 'payload/types'
import { image } from './image'
import { video } from './video'
export const media: Field = {
  type: 'row',
  fields: [
    {
      name: 'mediaSource',
      type: 'radio',
      options: ['video', 'image'],
      defaultValue: 'image',
    },
    video,
    image,
  ],
}

// export default field
