import { isRouterAvailable } from "./";

describe("isRouterAvailable", () => {
  it("Should return true due to vue-router is installed as a devDependency", () => {
    expect(isRouterAvailable()).toBe(true);
  });
});
