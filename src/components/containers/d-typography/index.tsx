import { defineComponent, PropType, VNode } from "vue";

// TODO: which imports order should I use
import { TagName } from "@/components/types";

// import generateContentProp from "@/prop-factories/content";
import { contentProp } from "@/props";
import generateTypographySizeProp from "@/prop-factories/typography-size";
import generateTagNameProp from "@/prop-factories/tag-name";

import typographyStyles from "@/assets/styles/compositions/_typography.scss?module";
import styles from "./styles.css?module";

export default defineComponent({
  name: "DTypography",

  props: {
    /**
     * test description
     * @type {Content}
     */
    content: contentProp,
    ...generateTypographySizeProp(),
    ...generateTagNameProp(),
  },

  render(): VNode {
    const Tag: TagName = this.tag;
    const classList = {
      [styles.DTypography]: true,
      [typographyStyles[this.size]]: true,
    };

    return !this.$slots.default ? (
      <Tag class={classList} vHtml={this.content} />
    ) : (
      <Tag class={classList}>{this.$slots.default()}</Tag>
    );
  },
});
