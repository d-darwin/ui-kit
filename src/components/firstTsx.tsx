import { defineComponent, PropType, VNode } from "vue";

interface Content {
  code: number;
  message: string;
}

export default defineComponent({
  name: "FirstTsx",

  props: {
    msg: {
      type: String,
      required: true,
    },
    content: {
      type: Object as PropType<Content>,
      required: true,
    },
  },

  render(): VNode[] {
    return [
      <div>{this.msg}</div>,
      <pre>{this.content.code}</pre>,
      <pre>{this.content.message}</pre>,
    ];
  },
});
