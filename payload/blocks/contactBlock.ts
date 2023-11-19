import {
  channelsSettings,
  socialsSettings,
  writeup,
  writeupSettings,
} from '../fields/elements'
import { form, formSettings } from '../fields/form'
import {
  groupSettings,
  listSettings,
  sectionSettings,
  segmentSettings,
} from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: contactBlock, settings: contactBlockSettings } =
  _buildBlock({
    slug: 'contact',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/marketing/contact-sections.png',
    dataFields: [writeup, form],
    settingsTabs: [
      sectionSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      channelsSettings,
      listSettings,
      socialsSettings,
      formSettings,
    ],
  })
