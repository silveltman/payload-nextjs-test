import { employeesDeck, employeesDeckSettings } from '../fields/decks'
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

export const { data: employeesBlock, settings: employeesBlockSettings } =
  _buildBlock({
    slug: 'employees',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/marketing/feature-sections.png',
    dataFields: [writeup, buttons, employeesDeck],
    settingsTabs: [
      sectionSettings,
      segmentSettings,
      writeupSettings,
      groupSettings,
      buttonsSettings,
      employeesDeckSettings,
    ],
  })
