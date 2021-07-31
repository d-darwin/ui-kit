import { TYPOGRAPHY_SIZES } from "@/components/containers/d-typography/constants";

export type Content = string | number | undefined;

export type TagName = keyof HTMLElementTagNameMap;

export type TypographySize = keyof typeof TYPOGRAPHY_SIZES;
