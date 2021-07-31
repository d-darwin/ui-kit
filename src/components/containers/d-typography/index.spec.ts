import { shallowMount } from "@vue/test-utils";
import { DTypography } from "@/index";

// TODO: add coverage
describe("DTypography", () => {
  const content = "Plain String";
  const size = "h3";
  const tag = "details";

  const wrapper = shallowMount(DTypography, {
    props: { content, size, tag },
  });

  it("Renders props.content when passed", () => {
    // TODO: specify more accurate
    expect(wrapper.text()).toMatch(content);
  });

  it("Renders props.size when passed", () => {
    // TODO
  });

  it("Renders props.tag when passed", () => {
    // TODO
  });
});
