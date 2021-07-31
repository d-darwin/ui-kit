import { defineComponent, PropType, VNode } from "vue";

// TODO: add library path alias
import generateTypographySizeProp from "@/prop-factories/typography-size";
import { TagName } from "@/components/containers/d-typography/types";
import { TAG_NAMES } from "@/components/containers/d-typography/constants";

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

  // TODO: or use setup() ???
  render(): VNode {
    const Tag: TagName = this.tag;
    const classList = {
      [styles.DTypography]: true,
      [typographyStyles[this.size]]: true,
    };

    return !this.$slots.default ? (
      <Tag class={classList} vHtml={this.content} />
    ) : (
      <Tag class={classList}>
        <slot />
      </Tag>
    );
  },
});
