import { Tab } from 'payload/types'
import settingsThemeColors from './settingsThemeColors'
import settingsThemeFonts from './settingsThemeFonts'
import settingsThemeSizes from './settingsThemeSizes'

const config: Tab = {
  name: 'theme',
  fields: [
    {
      type: 'tabs',
      tabs: [settingsThemeColors, settingsThemeFonts, settingsThemeSizes],
    },
  ],
}

export default config
