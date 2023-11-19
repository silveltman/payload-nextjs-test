import { Access } from 'payload/config'

export const isLoggedIn: Access<any> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user)
}
