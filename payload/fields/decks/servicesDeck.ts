import { imageSettings, writeupSettings } from '../elements'
import { cardSettings, deckSettings } from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: servicesDeck, settings: servicesDeckSettings } =
  _buildDeck({
    collection: 'services',
    settingsTabs: [deckSettings, cardSettings, imageSettings, writeupSettings],
  })
