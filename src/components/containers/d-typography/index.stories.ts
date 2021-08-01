import { Story } from "@storybook/vue3";
import { DTypography } from "@/index";
import { DTypographyProps } from "@/components/containers/d-typography/types";
import {
  TAG_NAMES,
  TYPOGRAPHY_SIZES,
} from "@/components/containers/d-typography/constants";
import {
  content,
  typographySize as size,
  tagName as tag,
} from "@/storybook-arg-types";

export default {
  title: "containers/DTypography",
  component: DTypography,
  argTypes: { content, size, tag },
  args: { size: TYPOGRAPHY_SIZES.general, tag: TAG_NAMES.div },
};

const Template: Story<DTypographyProps> = (args: DTypographyProps) => ({
  components: { DTypography },
  setup() {
    return { args };
  },
  template: "<DTypography v-bind='args' />",
});

export const PlainContent = Template.bind({});
PlainContent.args = {
  content: "Plain Content",
};

export const HTMLContent = Template.bind({});
HTMLContent.args = {
  content: "<i>HTML Content</i>",
};

// TODO: with slot

// TODO: ???
