import { Tab } from 'payload/types'

const config: Tab = {
  name: 'sizes',
  fields: [
    {
      name: 'scale',
      type: 'number',
      required: true,
      defaultValue: 1,
      min: 0.9,
      max: 1.1,
      admin: {
        step: 0.01,
      },
    },
    {
      name: 'rounded',
      type: 'radio',
      options: ['none', 'tiny', 'small', 'medium', 'large'],
      required: true,
      defaultValue: 'none',
    },
    // TODO: add shadow here and to sizes unocss preset
    // {
    //   name: 'shadow',
    //   type: 'radio',
    //   options: ['none', 'tiny,', 'small', 'medium', 'large', 'large'],
    //   required: true,
    //   defaultValue: 'none',
    // },
  ],
}

export default config
