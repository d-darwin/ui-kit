import { PropType } from "vue";
import { TAG_NAMES } from "@/components/constants";
import { TagName } from "@/components/types";

// TODO: add prop generator generic???
export default function generateTagNameProp(
  defaultValue: TagName = TAG_NAMES.div
): { tag: { type: PropType<TagName>; default: TagName } } {
  return {
    /**
     * Which tag should wrap the component content. Pass null if you dont need any wrapper.
     * @type {TagName}
     */
    tag: {
      type: String as PropType<TagName>,
      default: defaultValue,
    },
  };
}
