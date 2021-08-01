import { PropType } from "vue";
import { TYPOGRAPHY_SIZES } from "@/components/containers/d-typography/constants";
import { TypographySize } from "@/components/containers/d-typography/types";

// TODO: add prop generator generic???
export default function generateTypographySizeProp(
  defaultValue: TypographySize = TYPOGRAPHY_SIZES.general
): { size: { type: PropType<TypographySize>; default: TypographySize } } {
  return {
    /**
     * Defines main font props of the component content.<br>
     * Expected values: "small", "general", "longread", "augmented", "h5", "h4", "h3", "h2", "h1".<br>
     * See './src/assets/styles/tokens/_typography.scss' for more details.
     * @type {TypographySize}
     */
    size: {
      type: String as PropType<TypographySize>,
      default: defaultValue,
    },
  };
}
