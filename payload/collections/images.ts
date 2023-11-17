import { CollectionConfig } from "payload/types";

export const images: CollectionConfig = {
  slug: "images",
  upload: {
    staticURL: "/images",
    staticDir: "../public/images",
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      label: "Alt",
      type: "text",
    },
  ],
};
