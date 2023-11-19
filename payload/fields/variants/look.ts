import type { RadioField } from 'payload/types'

type Option = 'solid' | 'soft' | 'surface' | 'outline' | 'ghost'

interface Args {
  options: Option[]
  defaultValue: Option
}

export default ({ options, defaultValue }: Args): RadioField => ({
  name: 'look',
  type: 'radio',
  required: true,
  options,
  defaultValue,
})
