import type { Tab } from 'payload/types'
import { imageSettings, writeupSettings } from '../fields/elements'
import { deckSettings, sectionSettings, segmentSettings } from '../fields/wraps'

const config: Tab = {
  name: 'collections',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'posts',
          fields: [
            {
              type: 'tabs',
              tabs: [
                sectionSettings,
                segmentSettings,
                writeupSettings,
                imageSettings,
              ],
            },
          ],
        },
        {
          name: 'categories',
          fields: [
            {
              type: 'tabs',
              tabs: [
                sectionSettings,
                segmentSettings,
                writeupSettings,
                deckSettings,
              ],
            },
          ],
        },
        {
          name: 'reviews',
          fields: [
            {
              type: 'tabs',
              tabs: [sectionSettings],
            },
          ],
        },
        {
          name: 'services',
          fields: [
            {
              type: 'tabs',
              tabs: [sectionSettings],
            },
          ],
        },
      ],
    },
  ],
}

export default config
