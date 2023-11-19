import { postsDeck, postsDeckSettings } from '../fields/decks'
import {
  buttons,
  buttonsSettings,
  writeup,
  writeupSettings,
} from '../fields/elements'
import {
  groupSettings,
  sectionSettings,
  segmentSettings,
} from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: postsBlock, settings: postsBlockSettings } = _buildBlock({
  slug: 'posts',
  imageURL:
    'https://tailwindui.com/img/category-thumbnails/marketing/blog-sections.png',
  dataFields: [writeup, buttons, postsDeck],
  settingsTabs: [
    sectionSettings,
    segmentSettings,
    writeupSettings,
    groupSettings,
    buttonsSettings,
    postsDeckSettings,
  ],
})
