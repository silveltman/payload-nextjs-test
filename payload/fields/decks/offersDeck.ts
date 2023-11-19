import {
  buttons,
  buttonsSettings,
  image,
  imageSettings,
  specs,
  specsSettings,
  writeup,
  writeupSettings,
} from '../elements'
import {
  cardSettings,
  deckSettings,
  groupSettings,
  listSettings,
  segmentSettings,
} from '../wraps'
import _buildDeck from './_buildDeck'

export const { data: offersDeck, settings: offersDeckSettings } = _buildDeck({
  name: 'offers',
  dataFields: [image, writeup, specs, buttons],
  settingsTabs: [
    deckSettings,
    cardSettings,
    imageSettings,
    segmentSettings,
    writeupSettings,
    listSettings,
    specsSettings,
    groupSettings,
    buttonsSettings,
  ],
})
