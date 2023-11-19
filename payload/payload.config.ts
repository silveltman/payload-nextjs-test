import { mongooseAdapter } from '@payloadcms/db-mongodb'
import FormBuilder from '@payloadcms/plugin-form-builder'
import seo from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
import {
  employees,
  images,
  pages,
  policies,
  posts,
  reviews,
  services,
  users,
} from './collections'
import {
  company,
  cta,
  footer,
  header,
  settings,
} from './globals'

export default buildConfig({
  admin: {
    user: users.slug,
    // css: path.resolve(__dirname, './styles/main.scss'),
    dateFormat: 'dd/MM/yyyy',
    // avatar: 'gravatar',
    // livePreview: {
    //   collections: [
    //     'pages',
    //     'posts',
    //     'services',
    //     'reviews',
    //     'policies',
    //   ],
    //   url: ({ data }) => data?.url,
    // },
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || false,
    autoPluralization: false,
  }),
  // rateLimit: {
  //   max: 5000,
  // },
  editor: lexicalEditor({}),
  collections: [
    pages,
    posts,
    services,
    policies,
    reviews,
    images,
    employees,
    users,
  ],
  globals: [company, header, footer, cta, settings],
  // typescript: {
    // outputFile: path.resolve(__dirname, '../../astro/src/types/payload.d.ts'),
    // outputFile: path.resolve(__dirname, './types/payload-types.d.ts'),
  // },
  // graphQL: {
    // schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  // },
  // serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [
    '*',
    'http://localhost:4321',
    'http://localhost:3000',
    'https://vercel.app',
    "https://payload-nextjs-test.vercel.app",
    // process.env.PAYLOAD_PUBLIC_SERVER_URL,
    // process.env.PAYLOAD_PUBLIC_APP_URL,
  ],
  csrf: [
    'http://localhost:4321',
    'http://localhost:3000',
    'https://vercel.app',
    "https://payload-nextjs-test.vercel.app",
    // process.env.PAYLOAD_PUBLIC_SERVER_URL,
    // process.env.PAYLOAD_PUBLIC_APP_URL,
  ],
  // localization: {
  //   locales: ['nl'],
  //   defaultLocale: 'nl',
  // },
  plugins: [
    seo({
      uploadsCollection: 'images',
      tabbedUI: true,
      collections: [
        'pages',
        'posts',
        'services',
        'reviews',
        'policies',
        'categories',
      ],
      // generateTitle: ({ doc }: any) => doc?.title?.value,
      // generateDescription: ({ doc }: any) => doc?.description?.value,
      // generateImage: ({ doc }: any) => doc?.image?.value,
      // generateURL: ({ doc }: any) => doc?.url?.value,
    }),
    FormBuilder({
      fields: {
        payment: false,
      },
      formOverrides: {
        versions: true,
        admin: {
          group: 'Data',
        },
      },
      formSubmissionOverrides: {
        slug: 'submissions',
        admin: {
          group: 'Backend',
        },
      },
    }),
    // configuredStripePlugin,
  ],
})
