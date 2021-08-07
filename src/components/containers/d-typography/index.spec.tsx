import { shallowMount } from "@vue/test-utils";
import { DTypography } from "@/index";

describe("DTypography", () => {
  const content = "Plain string content";
  const size = "h3"; // The component should has this className
  const tag = "details";
  const slotContent = <div className="slotContent">{content}</div>;

  const wrapperWithContent = shallowMount(DTypography, {
    props: { content, size, tag },
  });

  const wrapperWithSlot = shallowMount(DTypography, {
    props: { size, tag },
    slots: {
      default: slotContent,
    },
  });

  it("Renders props.content", () => {
    expect(wrapperWithContent.text()).toMatch(content);
  });

  it("Renders props.size", () => {
    // TODO: also test computed styles???
    expect(wrapperWithContent.element.classList.contains(size)).toBe(true);
  });

  it("Renders props.tag", () => {
    expect(wrapperWithContent.element.tagName).toBe(tag.toUpperCase());
  });

  it("Renders slotContent", () => {
    expect(wrapperWithSlot.findAll(".slotContent").length).toBe(1);
  });

  it("Renders content inside slotContent", () => {
    expect(wrapperWithSlot.findAll(".slotContent")[0].text()).toMatch(content);
  });

  it("Replace default click handler with vue-router push if installed", () => {
    // TODO
  });
});
