import { defineComponent, VNode } from "vue";
import { linkHrefRouting } from "@/mixins";

// TODO: which imports order should I use
import { TagName } from "@/components/types";

// import { contentProp } from "@/props";
import {
  generateContentProp,
  generateTypographySizeProp,
  generateTagNameProp,
} from "@/prop-factories";

import typographyStyles from "@/assets/styles/compositions/_typography.scss?module";
import styles from "./styles.css?module";

export default defineComponent({
  name: "DTypography",

  // TODO: suppose to use composition instead
  mixins: [linkHrefRouting],

  props: {
    // TODO: how to reuse prop JSDocs for storybook-docs ???
    ...generateContentProp(),
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
