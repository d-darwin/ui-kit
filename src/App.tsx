import { defineComponent, VNode } from "vue";
import FirstTsx from "@/components/firstTsx";
import { DTypography } from "@/index";

export default defineComponent({
  data() {
    return {
      content: { code: 120, message: "some message" },
    };
  },

  render(): VNode[] {
    return [
      <FirstTsx msg="ssss" content={this.content} />,
      <DTypography content="d-typography content" size="h1" tag="span" />,
    ];
  },
});
