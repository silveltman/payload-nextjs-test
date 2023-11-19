import { SelectField, Tab } from 'payload/types'

const colorBase = (name: string): SelectField => ({
  name: name,
  type: 'select',
  options: ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'],
  required: true,
  defaultValue: 'gray',
})

const colorVibrant = (name: string): SelectField => ({
  name: name,
  type: 'select',
  required: true,
  defaultValue: 'blue',
  options: [
    'tomato',
    'red',
    'ruby',
    'crimson',
    'pink',
    'plum',
    'purple',
    'violet',
    'iris',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'jade',
    'green',
    'grass',
    'bronze',
    'gold',
    'brown',
    'orange',
    'amber',
    'yellow',
    'lime',
    'mint',
    'sky',
  ],
})

const config: Tab = {
  name: 'colors',
  fields: [
    colorBase('base'),
    colorVibrant('brand'),
    colorVibrant('accent'),
    {
      name: 'scheme',
      type: 'radio',
      options: ['light', 'dark'],
      defaultValue: 'light',
      required: true,
    },
    {
      name: 'texture',
      type: 'radio',
      options: ['solid', 'translucent'],
      defaultValue: 'light',
      required: true,
    },
    {
      name: 'contrast',
      label: 'Inreased Contrast',
      type: 'checkbox',
      defaultValue: false,
      required: true,
    },
  ],
}

export default config
