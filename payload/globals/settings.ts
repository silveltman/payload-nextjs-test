import { GlobalConfig } from 'payload/types'
import settingsBlocks from '../settings/settingsBlocks'
import settingsCollections from '../settings/settingsCollections'
import settingsElements from '../settings/settingsElements'
import settingsGlobals from '../settings/settingsGlobals'
import settingsTheme from '../settings/settingsTheme'

export const settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  admin: {
    group: 'Config',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        settingsTheme,
        settingsElements,
        settingsBlocks,
        settingsGlobals,
        settingsCollections,
      ],
    },
  ],
}
