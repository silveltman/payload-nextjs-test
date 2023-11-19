import { buttonsSettings, writeupSettings } from '../elements'
import {
  cardSettings,
  deckSettings,
  groupSettings,
  segmentSettings,
} from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: statsDeck, settings: statsDeckSettings } = _buildDeck({
  name: 'stats',
  dataFields: [
    {
      name: 'icon',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'value',
      type: 'text',
    },
  ],
  settingsTabs: [
    deckSettings,
    cardSettings,
    // iconSettings,
    segmentSettings,
    writeupSettings,
    groupSettings,
    buttonsSettings,
  ],
})
