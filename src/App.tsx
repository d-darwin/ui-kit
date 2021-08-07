import { defineComponent, VNode } from "vue";
import { DTypography } from "@/index";

export default defineComponent({
  data() {
    return {
      content: { code: 120, message: "some message" },
    };
  },

  render(): VNode[] {
    return [
      <div />,
      <DTypography content="d-typography content" size="h1" tag="span" />,
    ];
  },
});
