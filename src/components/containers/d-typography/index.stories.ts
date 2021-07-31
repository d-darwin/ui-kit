import { DTypography } from "@/index";
import { TagName, TypographySize } from "@/types";

export default {
  title: "containers/DTypography",
  component: DTypography,
  argTypes: {
    // TODO add common argTypes
    content: { control: { type: "text" } },
    size: { control: { type: "select", options: ["general", "small"] } },
    tag: { control: { type: "select", options: ["span", "div"] } },
  },
  args: {
    content: "Simple string content",
    size: "small",
    tag: "span",
  },
};

const Template = (args: {
  content: string | number | undefined;
  size: TypographySize;
  tag: TagName;
}) => ({
  components: { DTypography },
  setup() {
    return { args };
  },
  template: "<DTypography {...args} />",
});

export const Default = Template.bind({});
