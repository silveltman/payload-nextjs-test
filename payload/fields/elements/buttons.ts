import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import href from '../href'
import label from '../label'
import { className, hue, look } from '../variants'

export const buttons: Field = {
  name: 'buttons',
  interfaceName: 'Buttons',
  type: 'array',
  maxRows: 3,
  fields: [label, href],
}

export const buttonsSettings: Tab = {
  label: 'Buttons',
  fields: [
    {
      name: 'buttons',
      type: 'array',
      fields: [
        exclude,
        look({
          options: ['solid', 'soft', 'surface', 'outline', 'ghost'],
          defaultValue: 'solid',
        }),
        hue,
        className,
      ],
    },
  ],
}
