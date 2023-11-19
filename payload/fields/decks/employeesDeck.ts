import { buttonsSettings, imageSettings, writeupSettings } from '../elements'
import {
  cardSettings,
  deckSettings,
  groupSettings,
  segmentSettings,
} from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: employeesDeck, settings: employeesDeckSettings } =
  _buildDeck({
    collection: 'employees',
    settingsTabs: [
      deckSettings,
      cardSettings,
      imageSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
    ],
  })
