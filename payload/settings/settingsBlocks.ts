import type { Tab } from 'payload/types'
import {
  contactBlockSettings,
  contentBlockSettings,
  ctaBlockSettings,
  featuresBlockSettings,
  heroBlockSettings,
  logosBlockSettings,
  offersBlockSettings,
  postsBlockSettings,
  reviewsBlockSettings,
  servicesBlockSettings,
  statsBlockSettings,
  employeesBlockSettings,
  bookingBlockSettings,
} from '../blocks'
import { imagesBlockSettings } from '../blocks/imagesBlock'

const config: Tab = {
  name: 'blocks',
  fields: [
    {
      type: 'tabs',
      tabs: [
        heroBlockSettings,
        ctaBlockSettings,
        featuresBlockSettings,
        contentBlockSettings,
        contactBlockSettings,
        offersBlockSettings,
        imagesBlockSettings,
        logosBlockSettings,
        postsBlockSettings,
        reviewsBlockSettings,
        servicesBlockSettings,
        statsBlockSettings,
        employeesBlockSettings,
        bookingBlockSettings,
      ],
    },
  ],
}

export default config
