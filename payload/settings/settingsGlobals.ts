import type { Tab } from 'payload/types'
import { ctaSettings, footerSettings, headerSettings } from '../globals'

const config: Tab = {
  name: 'globals',
  fields: [
    {
      type: 'tabs',
      tabs: [headerSettings, footerSettings, ctaSettings],
    },
  ],
}

export default config
