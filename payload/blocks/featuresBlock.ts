import { featuresDeck, featuresDeckSettings } from '../fields/decks'
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

export const { data: featuresBlock, settings: featuresBlockSettings } =
  _buildBlock({
    slug: 'features',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png',
    dataFields: [writeup, buttons, featuresDeck],
    settingsTabs: [
      sectionSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
      featuresDeckSettings,
    ],
  })
