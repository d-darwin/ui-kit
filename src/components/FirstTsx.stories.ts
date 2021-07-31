import FirstTsx from "./firstTsx";
import { template } from "@babel/core";

export default {
  title: "FirstTsx",
  component: FirstTsx,
  argTypes: {
    msg: { control: { type: "text" } },
    content: { control: { type: "object" } },
  },
  args: {
    msg: "string message",
    content: { code: 120, message: "some message" },
  },
};

const Template = (args: {
  msg: string;
  content: { code: number; message: string };
}) => ({
  components: { FirstTsx },
  setup() {
    return { args };
  },
  template: "<FirstTsx :msg='args.msg' :content='args.content' />",
});

export const Default = Template.bind({});
