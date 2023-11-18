import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { postgresAdapter } from "@payloadcms/db-postgres"; // beta
import { lexicalEditor } from "@payloadcms/richtext-lexical"; // beta
import { pages } from "./collections/pages";
import { users } from "./collections/users";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";

// working hopefully
export default buildConfig({
  admin: {
    user: users.slug,
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || false,
  }),
  editor: lexicalEditor({}),
  collections: [users, pages],
  cors: [
    "*",
    "http://localhost:4321",
    "http://localhost:3000",
    "https://vercel.app",
    "https://payload-nextjs-test.vercel.app",
  ],
  csrf: [
    "http://localhost:4321",
    "http://localhost:3000",
    "https://vercel.app",
    "https://payload-nextjs-test.vercel.app",
  ],
});
