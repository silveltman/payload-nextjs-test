import {
  imageSettings,
  personSettings,
  ratingSettings,
  writeupSettings,
} from '../elements'
import { cardSettings, deckSettings, segmentSettings } from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: reviewsDeck, settings: reviewsDeckSettings } = _buildDeck({
  collection: 'reviews',
  settingsTabs: [
    deckSettings,
    cardSettings,
    imageSettings,
    segmentSettings,
    ratingSettings,
    personSettings,
    writeupSettings,
  ],
})
