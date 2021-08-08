import { Story } from "@storybook/vue3";
import { DTypography } from "@/index";
import { DTypographyProps } from "@/components/types";
import { TAG_NAME_DEFAULTS, TYPOGRAPHY_SIZES } from "@/components/constants";
import {
  content,
  typographySize as size,
  tagName as tag,
} from "@/storybook-arg-types";

export default {
  title: "containers/DTypography",
  component: DTypography,
  argTypes: { content, size, tag },
  args: { size: TYPOGRAPHY_SIZES.general, tag: TAG_NAME_DEFAULTS.div },
};

const Template: Story<DTypographyProps> = (args: DTypographyProps) => ({
  components: { DTypography },
  setup() {
    return { args };
  },
  template: "<DTypography v-bind='args' />",
});

export const UsingPlainContent = Template.bind({});
UsingPlainContent.args = {
  content: "Plain Content",
};

export const UsingHTMLContent = Template.bind({});
UsingHTMLContent.args = {
  content: "<i>HTML Content <a href='/test-link'>link</a></i>",
};

export const UsingSlot: Story<DTypographyProps> = (args: DTypographyProps) => ({
  components: { DTypography },
  setup() {
    return { args };
  },
  template: `
    <DTypography v-bind='args'>
      <ul>
        <li>Using default slot</li>
        <li>you can pass any HTML or component</li>
        <li>and even <a href="/test-link">links</a></li>
      </ul>
    </DTypography>
  `,
});

// TODO: with links
