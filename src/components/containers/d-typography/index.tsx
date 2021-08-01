import { defineComponent, PropType, VNode } from "vue";

// TODO: which imports order should I use
import { TagName } from "@/components/containers/d-typography/types";

import generateContentProp from "@/prop-factories/content";
import generateTypographySizeProp from "@/prop-factories/typography-size";
import generateTagNameProp from "@/prop-factories/tag-name";

import typographyStyles from "@/assets/styles/compositions/_typography.scss?module";
import styles from "./styles.css?module";

export default defineComponent({
  name: "DTypography",

  props: {
    ...generateContentProp(),
    ...generateTypographySizeProp(),
    ...generateTagNameProp(),
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
