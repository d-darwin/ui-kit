import { PropType } from "vue";
import { TYPOGRAPHY_SIZES } from "@/components/containers/d-typography/constants";
import { TypographySize } from "@/components/containers/d-typography/types";

// TODO: add prop generator generic???
export default function generateTypographySizeProp(
  defaultValue: TypographySize = TYPOGRAPHY_SIZES.general
): { type: PropType<TypographySize>; default: TypographySize } {
  return {
    type: String as PropType<TypographySize>,
    default: defaultValue,
  };
}
