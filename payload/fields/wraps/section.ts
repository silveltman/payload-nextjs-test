import { Tab } from 'payload/types'
import {
  className,
  frame,
  hue,
  layout,
  look,
  order,
  scheme,
  size,
  x,
  y,
} from '../variants'

export const sectionSettings: Tab = {
  name: 'section',
  fields: [
    frame({
      options: ['fill', 'float', 'panel', 'screen'],
      defaultValue: 'fill',
    }),
    look({
      options: ['ghost', 'outline', 'soft', 'surface', 'solid'],
      defaultValue: 'ghost',
    }),
    layout({
      options: ['col', 'row'],
      defaultValue: 'col',
    }),
    y({
      options: ['start', 'center', 'end', 'between'],
      defaultValue: 'start',
    }),
    x({
      options: ['stretch', 'center'],
      defaultValue: 'stretch',
    }),
    order,
    size,
    hue,
    scheme,
    className,
  ],
}
