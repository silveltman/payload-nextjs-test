import type { RadioField } from 'payload/types'

type Option = 'stretch' | 'start' | 'center' | 'end' | 'between'

interface Args {
  options: Option[]
  defaultValue: Option
}

export default ({ options, defaultValue }: Args): RadioField => ({
  name: 'y',
  type: 'radio',
  required: true,
  options,
  defaultValue,
})
