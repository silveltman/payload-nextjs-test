import { Access } from 'payload/config'

export const isAdminOrAi: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin') || user.roles?.includes('ai')) {
      return true
    }
  }

  // Reject everyone else
  return false
}
