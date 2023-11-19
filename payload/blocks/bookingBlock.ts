import { image, imageSettings } from '../fields/elements/image'
import { sectionSettings } from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: bookingBlock, settings: bookingBlockSettings } =
  _buildBlock({
    slug: 'booking',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/application-ui/calendars.png',
    dataFields: [
      {
        name: 'callLink',
        type: 'text',
      },
    ],
    settingsTabs: [sectionSettings],
  })
