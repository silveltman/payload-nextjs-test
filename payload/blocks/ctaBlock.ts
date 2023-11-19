import {
  buttons,
  buttonsSettings,
  image,
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

export const { data: ctaBlock, settings: ctaBlockSettings } = _buildBlock({
  slug: 'cta',
  imageURL:
    'https://tailwindui.com/img/category-thumbnails/marketing/cta-sections.png',
  dataFields: [writeup, buttons, image, media],
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
