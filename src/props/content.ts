import { PropType } from "vue";
import { Content } from "@/components/types";

/**
 * May contain any HTML string. Alternatively you can use default slot to place any HTML or components.
 * @type {Content}
 */
export default {
  type: [String, Number] as PropType<Content>,
};
