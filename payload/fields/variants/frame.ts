import type { RadioField } from 'payload/types'

type Option = 'fill' | 'float' | 'panel' | 'screen'

interface Args {
  options: Option[]
  defaultValue: Option
}

export default ({ options, defaultValue }: Args): RadioField => ({
  name: 'frame',
  type: 'radio',
  required: true,
  options,
  defaultValue,
})
