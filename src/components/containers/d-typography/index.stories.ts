import { DTypography } from "@/index";
import {
  Content,
  TypographySize as Size,
  TagName as Tag,
} from "@/components/containers/d-typography/types";
import {
  content,
  typographySize as size,
  tagName as tag,
} from "@/storybook-arg-types";

export default {
  title: "containers/DTypography",
  component: DTypography,
  argTypes: {
    content,
    size,
    tag,
  },
  args: {
    size: "general",
    tag: "div",
  },
};

const Template = (args: { content: Content; size: Size; tag: Tag }) => ({
  components: { DTypography },
  setup() {
    return { args };
  },
  template: "<DTypography v-bind='args' />",
});

export const PlainContent = Template.bind({});
// @ts-ignore // TODO: fix typing
PlainContent.args = {
  content: "Plain Content",
};

export const HTMLContent = Template.bind({});
// @ts-ignore // TODO: fix typing
HTMLContent.args = {
  content: "<i>HTML Content</i>",
};

// TODO: with slot

// TODO: ???
