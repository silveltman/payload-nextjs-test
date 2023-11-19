import type { Tab } from 'payload/types'
import {
  buttonsSettings,
  channelsSettings,
  collapsibleSettings,
  imageSettings,
  linksSettings,
  personSettings,
  // priceSettings,
  ratingSettings,
  socialsSettings,
  specsSettings,
  writeupSettings,
} from '../fields/elements'

const config: Tab = {
  name: 'elements',
  fields: [
    {
      type: 'tabs',
      tabs: [
        writeupSettings,
        buttonsSettings,
        linksSettings,
        channelsSettings,
        collapsibleSettings,
        imageSettings,
        personSettings,
        ratingSettings,
        socialsSettings,
        specsSettings,
      ],
    },
  ],
}

export default config
