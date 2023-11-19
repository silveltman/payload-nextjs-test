import { image, imageSettings } from '../fields/elements/image'
import { sectionSettings } from '../fields/wraps'
import _buildBlock from './_buildBlock'

export const { data: contentBlock, settings: contentBlockSettings } =
  _buildBlock({
    slug: 'content',
    imageURL:
      'https://tailwindui.com/img/category-thumbnails/marketing/content-sections.png',
    dataFields: [image],
    settingsTabs: [sectionSettings, imageSettings],
  })
