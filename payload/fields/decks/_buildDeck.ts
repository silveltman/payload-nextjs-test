import type { ArrayField, Field, GroupField, Tab } from 'payload/types'

interface Args {
  name?: string
  collection?: string
  dataFields?: Field[]
  settingsTabs: Tab[]
}

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default ({ collection, name, dataFields, settingsTabs }: Args) => ({
  data: collection
    ? ({
        name: collection,
        type: 'group',
        interfaceName: capitalize(collection) + 'Deck',
        fields: [
          {
            name: 'source',
            type: 'radio',
            defaultValue: 'all',
            required: true,
            options: ['all', 'docs'],
          },
          {
            name: 'docs',
            relationTo: collection,
            type: 'relationship',
            hasMany: true,
            admin: {
              width: '100%',
              condition: (_, siblingData) => siblingData?.source === 'docs',
            },
          },
        ],
      } as GroupField)
    : ({
        name: name,
        type: 'array',
        interfaceName: capitalize(name) + 'Deck',
        required: true,
        fields: dataFields,
      } as ArrayField),
  settings: {
    name: collection || name,
    interfaceName: capitalize(collection || name) + 'DeckSettings',
    fields: [
      {
        type: 'tabs',
        tabs: settingsTabs,
      },
    ],
  } as Tab,
})
