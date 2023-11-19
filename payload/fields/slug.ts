import type { Field } from 'payload/types'
import slugify from '../scripts/utils/slugify'

const field: Field = {
  type: 'row',
  admin: {
    className: 'row-slug',
  },
  fields: [
    {
      name: 'slug',
      label: 'Slug - Pas op met wijzigen, heeft invloed op SEO',
      type: 'text',
      // unique: true,
      admin: {
        width: '40%',
        className: 'field-slug',
      },
      hooks: {
        beforeValidate: [({ value }) => slugify(value)],
        // beforeChange: [
        //   ({ siblingData, req }) => {
        //     if (!siblingData.slug) return null
        //     const slug = siblingData.slug
        //     const collection = req?.collection?.config?.slug
        //     const label = req?.collection?.config?.labels?.plural
        //     const labelSlug = slugify(typeof label === 'string' && label)
        //     if (collection === 'pages' && slug === 'home')
        //       siblingData.path = '/'
        //     else if (collection === 'pages') siblingData.path = `/${slug}`
        //     else siblingData.path = `/${labelSlug}/${slug}`
        //     siblingData.url = `${process.env.PAYLOAD_PUBLIC_APP_URL}${siblingData.path}`
        //   },
        // ],
      },
    },
    {
      name: 'path',
      type: 'text',
      admin: {
        hidden: true,
        readOnly: true,
      },
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        readOnly: true,
        width: '40%',
        className: 'field-url',
      },
    },
  ],
}

export default field
