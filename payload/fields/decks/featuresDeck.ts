import {
  buttons,
  buttonsSettings,
  icon,
  iconSettings,
  image,
  imageSettings,
  writeup,
  writeupSettings,
} from '../elements'
import {
  cardSettings,
  deckSettings,
  groupSettings,
  segmentSettings,
} from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: featuresDeck, settings: featuresDeckSettings } =
  _buildDeck({
    name: 'features',
    dataFields: [image, icon, writeup, buttons],
    settingsTabs: [
      deckSettings,
      cardSettings,
      imageSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
      iconSettings,
    ],
  })
