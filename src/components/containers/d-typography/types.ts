import { TYPOGRAPHY_SIZES } from "@/components/containers/d-typography/constants";

export type Content = string | number | undefined;

export type TypographySize = keyof typeof TYPOGRAPHY_SIZES;

export type TagName = keyof HTMLElementTagNameMap;

export interface DTypographyProps {
  content: Content;
  size: TypographySize;
  tag: TagName;
}
