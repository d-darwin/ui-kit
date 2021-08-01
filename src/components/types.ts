import { TYPOGRAPHY_SIZES } from "@/components/constants";

export type Content = string | number;

export type TypographySize = keyof typeof TYPOGRAPHY_SIZES;

export type TagName = keyof HTMLElementTagNameMap;

export interface DTypographyProps {
  content: Content;
  size: TypographySize;
  tag: TagName;
}
