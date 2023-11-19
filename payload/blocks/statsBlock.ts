import { statsDeck, statsDeckSettings } from '../fields/decks'
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

export const { data: statsBlock, settings: statsBlockSettings } = _buildBlock({
  slug: 'stats',
  imageURL:
    'https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png',
  dataFields: [writeup, buttons, statsDeck],
  settingsTabs: [
    sectionSettings,
    segmentSettings,
    writeupSettings,
    groupSettings,
    buttonsSettings,
    statsDeckSettings,
  ],
})
