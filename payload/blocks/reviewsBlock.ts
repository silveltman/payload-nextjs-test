import { reviewsDeck, reviewsDeckSettings } from '../fields/decks'
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

export const { data: reviewsBlock, settings: reviewsBlockSettings } =
  _buildBlock({
    slug: 'reviews',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/ecommerce/reviews.png',
    dataFields: [writeup, buttons, reviewsDeck],
    settingsTabs: [
      sectionSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
      reviewsDeckSettings,
    ],
  })
