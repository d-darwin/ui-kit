import { defineComponent, VNode } from "vue";
import { shallowMount } from "@vue/test-utils";
import { linkHrefRouting } from "./index";

describe("linkHrefRouting", () => {
  const href = "/some-relative-link";
  const mockRoute = { someRoute: href };
  const mockRouter = { push: jest.fn() };
  console.error = jest.fn();

  const Component = defineComponent({
    name: "DummyComponent",
    mixins: [linkHrefRouting],
    render(): VNode {
      return (
        <div>
          Some HTML with <a href={href}>relative link</a>
        </div>
      );
    },
  });

  const wrapperWithRouter = shallowMount(Component, {
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    },
  });

  const wrapperWithoutRouter = shallowMount(Component);

  it("Should use router.push on the link click instead of default behavior", () => {
    const link = wrapperWithRouter.findAll("a")[0].element as HTMLAnchorElement;
    link.click();
    expect(mockRouter.push).toHaveBeenCalledWith(href);
  });

  it("Should console.error if vue-router module is installed but not consumed by vue", () => {
    const link = wrapperWithoutRouter.findAll("a")[0]
      .element as HTMLAnchorElement;
    link.click();
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
