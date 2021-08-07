/**
 * Simple implementation of the throttle technique
 *  which doesn't allow to our function to execute more than once every X milliseconds.
 * See example usage in '@dariwn-studio/ui-vue/compositions/windowSize.js'.
 *
 * @param func
 * @param ms
 * @returns {function(): unknown}
 */
export default function throttle(
  func: (...args: any[]) => any,
  ms: number
): (...args: any[]) => any {
  let isThrottled = false;
  let savedThis: ThisType<unknown> | null;
  let savedArgs: any[] | null;

  function wrapper(this: ThisType<unknown>, ...theArgs: any[]): void {
    if (isThrottled) {
      savedArgs = theArgs;
      savedThis = this;
      return;
    }

    func.apply(this, theArgs);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis || {}, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
