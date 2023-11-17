import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { postgresAdapter } from "@payloadcms/db-postgres"; // beta
import { lexicalEditor } from "@payloadcms/richtext-lexical"; // beta
import { pages } from "./collections/pages";
import { users } from "./collections/users";
import { images } from "./collections/images";

export default buildConfig({
  admin: {
    user: users.slug,
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || false,
  }),
  editor: lexicalEditor({}),
  collections: [users, pages, images],
});
