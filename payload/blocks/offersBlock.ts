import { offersDeck, offersDeckSettings } from '../fields/decks'
import { writeup, writeupSettings } from '../fields/elements'
import { sectionSettings } from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: offersBlock, settings: offersBlockSettings } = _buildBlock(
  {
    slug: 'offers',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/marketing/pricing.png',
    dataFields: [writeup, offersDeck],
    settingsTabs: [sectionSettings, writeupSettings, offersDeckSettings],
  }
)
