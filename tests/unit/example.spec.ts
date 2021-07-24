import { shallowMount } from "@vue/test-utils";
import FirstTsx from "@/components/firstTsx";

describe("FirstTsx", () => {
  const msg = "some msg";
  const content = { code: 120, message: "some message" };

  const wrapper = shallowMount(FirstTsx, {
    props: { msg, content },
  });

  it("renders props.msg when passed", () => {
    expect(wrapper.text()).toMatch(msg);
  });

  it("renders props.content.code when passed", () => {
    expect(wrapper.text()).toMatch(String(content.code));
  });

  it("renders props.content.message when passed", () => {
    expect(wrapper.text()).toMatch(content.message);
  });
});
