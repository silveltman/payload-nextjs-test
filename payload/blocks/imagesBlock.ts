import images from '../fields/images'
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
  gallerySettings,
} from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: imagesBlock, settings: imagesBlockSettings } = _buildBlock(
  {
    slug: 'images',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/ecommerce/product-lists.png',
    dataFields: [writeup, buttons, images],
    settingsTabs: [
      sectionSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
      gallerySettings,
    ],
  }
)
