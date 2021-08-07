import { shallowMount } from "@vue/test-utils";
import { DTypography } from "@/index";

// TODO: add coverage
describe("DTypography", () => {
  const content = "Plain string content";
  const size = "h3"; // The component should has this className
  const tag = "details";

  const wrapper = shallowMount(DTypography, {
    props: { content, size, tag },
  });

  it("Renders props.content when passed", () => {
    expect(wrapper.text()).toMatch(content);
  });

  it("Renders props.size when passed", () => {
    // TODO: do it more accurate
    expect(wrapper.element.classList.contains(size)).toBe(true);
  });

  it("Renders props.tag when passed", () => {
    expect(wrapper.element.tagName).toBe(tag.toUpperCase());
  });

  it("Renders slot when passed", () => {
    // TODO
  });

  it("Replace default click handler with vue-router push if installed", () => {
    // TODO
  });
});
