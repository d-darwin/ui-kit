import { throttle } from "./";

jest.useFakeTimers();

describe("throttle", () => {
  const delay = 300;
  const func = jest.fn();
  const funcArg = "some argument";

  const throttledFunc = throttle(func, delay);

  it("Should pass argument to the passed function", () => {
    throttledFunc(funcArg);
    expect(func).toHaveBeenCalledWith(funcArg);
  });

  it("Should call passed func only 1 time despite 3 calls", () => {
    throttledFunc(); // Should be ignored
    throttledFunc(); // Should be ignored
    throttledFunc(); // Should be ignored
    expect(func).toHaveBeenCalledTimes(1);
  });

  it("Should call passed func 3 times due to waiting until the second and the third calls", () => {
    jest.advanceTimersByTime(delay + 50);
    throttledFunc();
    jest.advanceTimersByTime(delay + 50);
    throttledFunc();
    expect(func).toHaveBeenCalledTimes(3);
  });
});
