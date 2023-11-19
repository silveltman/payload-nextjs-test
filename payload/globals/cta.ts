import { GlobalConfig, Tab } from 'payload/types'
import { ctaBlock } from '../blocks'
import {
  buttonsSettings,
  imageSettings,
  videoSettings,
  writeupSettings,
} from '../fields/elements'
import {
  groupSettings,
  sectionSettings,
  segmentSettings,
} from '../fields/wraps'

export const cta: GlobalConfig = {
  slug: 'cta',
  admin: {
    group: 'Data',
  },
  versions: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'blockType',
      type: 'text',
      defaultValue: ctaBlock.slug,
      hidden: true,
    },
    ...ctaBlock?.fields?.filter((field: any) => field.name !== 'setting'),
  ],
}

export const ctaSettings: Tab = {
  name: 'cta',
  fields: [
    {
      type: 'tabs',
      tabs: [
        sectionSettings,
        segmentSettings,
        writeupSettings,
        groupSettings,
        buttonsSettings,
        imageSettings,
        videoSettings,
      ],
    },
  ],
}
