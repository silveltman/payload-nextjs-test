import type { Block, Field } from 'payload/types'

const field = (blocks: Block[]): Field => ({
  name: 'blocks',
  type: 'blocks',
  blocks,
  admin: {
    condition: (_, siblingData) => {
      if (!siblingData?.type) return true
      else if (siblingData?.type === 'blocks') return true
      return false
    },
  },
})

export default field
