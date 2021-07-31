import { defineComponent, PropType, VNode } from "vue";

import { TagName } from "../../types";
import { TAG_NAMES } from "../../constants";
import styles from "./styles.module.css";

export default defineComponent({
  name: "DTypography",

  props: {
    content: {
      type: [String, Number] as PropType<string | number>,
    },

    /**
     * Which tag should wrap the component content. Pass null if you dont need any wrapper.
     * @type {TagName}
     */
    tag: {
      type: String as PropType<TagName>,
      default: TAG_NAMES.DIV,
    },
  },

  render(): VNode {
    const Tag: TagName = this.tag;

    return <Tag class={styles.DTypography}>{this.content}</Tag>;
  },
});
