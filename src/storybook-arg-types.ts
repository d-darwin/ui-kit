import { TAG_NAME_DEFAULTS, TYPOGRAPHY_SIZES } from "@/components/constants";

export const content = { control: { type: "text" } };

export const typographySize = {
  control: { type: "select" },
  options: Object.keys(TYPOGRAPHY_SIZES),
};

export const tagName = {
  control: { type: "select" },
  options: Object.keys(TAG_NAME_DEFAULTS),
};
