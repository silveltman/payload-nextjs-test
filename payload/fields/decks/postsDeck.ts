import { imageSettings, personSettings, writeupSettings } from '../elements'
import { cardSettings, deckSettings, segmentSettings } from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: postsDeck, settings: postsDeckSettings } = _buildDeck({
  collection: 'posts',
  settingsTabs: [
    deckSettings,
    cardSettings,
    imageSettings,
    segmentSettings,
    writeupSettings,
    personSettings,
  ],
})
