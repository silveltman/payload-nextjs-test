import {
  buttons,
  buttonsSettings,
  writeup,
  writeupSettings,
} from '../fields/elements'
import {
  groupSettings,
  sectionSettings,
  segmentSettings,
} from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: logosBlock, settings: logosBlockSettings } = _buildBlock({
  slug: 'logos',
  imageURL:
    'https://tailwindui.com/img/category-thumbnails/marketing/logo-clouds.png',
  dataFields: [writeup, buttons],
  settingsTabs: [
    sectionSettings,
    segmentSettings,
    writeupSettings,
    groupSettings,
    buttonsSettings,
  ],
})
