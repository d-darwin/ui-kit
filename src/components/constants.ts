/*: {
  [tagName in keyof HTMLElementTagNameMap]: tagName;
} */
export const TAG_NAME_DEFAULTS = {
  div: "div",
  span: "span",
  p: "p",
} as const;

export const TYPOGRAPHY_SIZES = {
  small: "small",
  general: "general",
  longread: "longread",
  augmented: "augmented",
  h5: "h5",
  h4: "h4",
  h3: "h3",
  h2: "h2",
  h1: "h1",
} as const;
