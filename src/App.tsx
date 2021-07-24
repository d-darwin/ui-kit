import { defineComponent, VNode } from "vue";
import FirstTsx from "@/components/firstTsx";

export default defineComponent({
  data() {
    return {
      content: { code: 120, message: "some message" },
    };
  },

  render(): VNode {
    return <FirstTsx msg="ssss" content={this.content} />;
  },
});
