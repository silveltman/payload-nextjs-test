import type { Block, Field, Tab } from 'payload/types'
import setting from '../fields/setting'

interface Args {
  slug: string
  imageURL: string
  dataFields: Field[]
  settingsTabs: Tab[]
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default ({ slug, imageURL, dataFields, settingsTabs }: Args) => ({
  data: {
    slug,
    imageURL,
    labels: {
      singular: capitalize(slug),
      plural: capitalize(slug),
    },
    interfaceName: capitalize(slug) + 'Block',
    fields: [setting, ...dataFields],
  } as Block,
  settings: {
    label: capitalize(slug),
    fields: [
      {
        name: slug,
        label: ' ',
        type: 'array',
        interfaceName: capitalize(slug) + 'BlockSettings',
        maxRows: 2,
        admin: {
          components: {
            RowLabel: ({ data }: any) => data?.name,
          },
        },
        fields: [
          {
            name: 'name',
            type: 'text',
            required: true,
          },
          {
            type: 'tabs',
            tabs: settingsTabs,
          },
        ],
      },
    ],
  } as Tab,
})
