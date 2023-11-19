import type { RadioField } from 'payload/types'

type Option = 'col' | 'row' | 'grid' | 'carousel' | 'masonry'

interface Args {
  options: Option[]
  defaultValue: Option
}

export default ({ options, defaultValue }: Args): RadioField => ({
  name: 'layout',
  type: 'radio',
  required: true,
  options,
  defaultValue,
})
