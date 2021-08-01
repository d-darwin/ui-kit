import { PropType } from "vue";
import { Content } from "@/components/types";

// TODO: add prop generator generic???
export default function generateContentProp(defaultValue: Content = ""): {
  content: { type: PropType<Content>; default: Content };
} {
  return {
    /**
     * May contain any HTML string. Alternatively you can use default slot to place any HTML or components.
     * @type {Content}
     */
    content: {
      type: [String, Number] as PropType<Content>,
      default: defaultValue,
    },
  };
}
