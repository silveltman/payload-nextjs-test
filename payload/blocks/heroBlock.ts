import {
  buttons,
  buttonsSettings,
  imageSettings,
  media,
  videoSettings,
  writeup,
  writeupSettings,
} from '../fields/elements'
import {
  groupSettings,
  sectionSettings,
  segmentSettings,
} from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: heroBlock, settings: heroBlockSettings } = _buildBlock({
  slug: 'hero',
  imageURL:
    'https://tailwindui.com/img/category-thumbnails/marketing/heroes.png',
  dataFields: [writeup, buttons, media],
  settingsTabs: [
    sectionSettings,
    segmentSettings,
    writeupSettings,
    groupSettings,
    buttonsSettings,
    imageSettings,
    videoSettings,
  ],
})
