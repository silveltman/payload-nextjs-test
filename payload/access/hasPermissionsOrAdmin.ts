import { Access } from 'payload/config'

export const hasAccessOrAdmin: Access = ({ req: { user } }) => {
  if (user) {
    if (user.roles?.includes('admin')) {
      return true
    }
  }

  return false
}
