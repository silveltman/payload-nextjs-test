import type { CollectionConfig } from 'payload/types'
// Access

const imageSize = (width: number): any => ({
  name: `w${width}`,
  width: width,
  withoutEnlargement: true,
  formatOptions: {
    format: 'webp',
    options: {
      quality: 80,
      withoutEnlargement: true,
    },
  },
})

export const images: CollectionConfig = {
  slug: 'images',
  admin: {
    useAsTitle: 'filename',
    group: 'Data',
    listSearchableFields: ['filename', 'alt'],
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  versions: true,
  upload: {
    mimeTypes: ['image/*'],
    staticURL: '/images',
    staticDir: 'images',
    resizeOptions: {
      width: 2560,
      withoutEnlargement: true,
    },
    imageSizes: [
      imageSize(640),
      //   imageSize(768),
      //   imageSize(1024),
      //   imageSize(1280),
      // imageSize(1280),
      //   imageSize(1536),
      //   imageSize(1920),
      imageSize(2560),
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description: 'Description of the image for SEO and screen readers.',
      },
    },
  ],
}
