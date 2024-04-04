import { Template, tinaTableTemplate } from "tinacms";

export const richTextComponent: Template[] = [
  tinaTableTemplate,
  {
    name: "VideoPlayer",
    label: "VideoPlayer",
    fields: [
      {
        name: "url",
        label: "Video URL",
        type: "string",
      },
    ],
    ui: {
      defaultItem: {
        url: "https://youtu.be/U3iw34Zbj60?si=mTOb-VOB3pShe9bK",
      },
    },
  },
  {
    name: "CaptionedImge",
    label: "Label Imge",
    fields: [
      {
        name: "imgUrl",
        label: "Image URL",
        type: "image",
      },
      {
        name: "caption",
        label: "Caption",
        type: "string",
      },
      {
        name: "alt",
        label: "Image alt text",
        type: "string",
      },
    ],
  },
  {
    name: "TextBox",
    label: "Text Box",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "rich-text",
      },
    ],
  },
  {
    name: "PullQoute",
    label: "Pull Qoute",
    ui: {
      defaultItem: {
        text: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
        author: "Jhons",
      },
    },
    fields: [
      {
        name: "text",
        label: "Text",
        type: "string",
      },
      {
        name: "author",
        label: "Author",
        description: "Optional",
        type: "string",
      },
      {
        name: "authorLink",
        label: "Author Link",
        description: "Optional",
        type: "string",
      },
    ],
  },
];
