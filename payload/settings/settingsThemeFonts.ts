import { GroupField, Tab } from 'payload/types'
import { className } from '../fields/variants'

const font = (name: string): GroupField => ({
  name: name,
  type: 'group',
  fields: [
    {
      name: 'family',
      type: 'text',
      required: true,
    },
    {
      name: 'weight',
      type: 'select',
      required: true,
      options: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
    {
      name: 'italic',
      type: 'checkbox',
    },
    className,
  ],
})

const config: Tab = {
  name: 'fonts',
  fields: [font('heading'), font('subheading'), font('text'), font('button')],
}

export default config
