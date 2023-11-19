import { servicesDeck, servicesDeckSettings } from '../fields/decks'
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

export const { data: servicesBlock, settings: servicesBlockSettings } =
  _buildBlock({
    slug: 'services',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png',
    dataFields: [writeup, buttons, servicesDeck],
    settingsTabs: [
      sectionSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
      servicesDeckSettings,
    ],
  })
