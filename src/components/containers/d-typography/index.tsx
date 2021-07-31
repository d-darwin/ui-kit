import { defineComponent, PropType, VNode } from "vue";

// TODO: add library path alias
import generateTypographySizeProp from "@/prop-factories/typography-size";
import { TagName } from "@/types";
import { TAG_NAMES } from "@/constants";

import typographyStyles from "@/assets/styles/compositions/_typography.scss?module";
import styles from "./styles.css?module";

export default defineComponent({
  name: "DTypography",

  props: {
    // TODO: move to common props
    content: {
      type: [String, Number] as PropType<string | number>,
    },

    // TODO: how to avoid type this again and again
    size: generateTypographySizeProp(),

    /**
     * Which tag should wrap the component content. Pass null if you dont need any wrapper.
     * @type {TagName}
     */
    // TODO: move to common props
    tag: {
      type: String as PropType<TagName>,
      default: TAG_NAMES.div,
    },
  },

  render(): VNode {
    const Tag: TagName = this.tag;

    return (
      <Tag
        class={{
          [styles.DTypography]: true,
          [typographyStyles[this.size]]: true,
        }}
      >
        {this.content}*{this.size}*
      </Tag>
    );
  },
});
