import type { Field, Tab } from 'payload/types'
import exclude from '../exclude'
import href from '../href'
import label from '../label'
import { className, hue, size } from '../variants'

export const links: Field = {
  name: 'links',
  interfaceName: 'Links',
  type: 'array',
  fields: [label, href],
}

export const linksSettings: Tab = {
  name: 'links',
  fields: [exclude, hue, size, className],
}
