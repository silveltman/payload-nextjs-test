import { CollectionConfig } from 'payload/types'
// Access
import { isAdminFieldLevel } from '../access/isAdmin'

export const users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Backend',
    defaultColumns: ['email', 'id'],
  },
  access: {
    read: () => true,
    delete: () => true,
    create: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      options: ['admin', 'ai', 'developer', 'designer', 'writer'],
      hasMany: true,
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      saveToJWT: true,
      defaultValue: 'admin',
    },
  ],
}
