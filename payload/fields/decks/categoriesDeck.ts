import { imageSettings, writeupSettings } from '../elements'
import { cardSettings, deckSettings } from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: categoriesDeck, settings: categoriesDeckSettings } =
  _buildDeck({
    collection: 'categories',
    settingsTabs: [deckSettings, cardSettings, imageSettings, writeupSettings],
  })
