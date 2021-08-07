import { consoleLog, getConsoleLogPrefix, LOG_LEVEL } from "./";

describe("consoleLog", () => {
  const message = "test message";

  console.log = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();

  it("Should console.log passed message with prefix", () => {
    consoleLog(message);
    expect(console[LOG_LEVEL.log]).toHaveBeenCalledWith(
      getConsoleLogPrefix(LOG_LEVEL.log) + message
    );
  });

  it("Should console.warn passed message with prefix", () => {
    consoleLog(message, LOG_LEVEL.warn);
    expect(console[LOG_LEVEL.warn]).toHaveBeenCalledWith(
      getConsoleLogPrefix(LOG_LEVEL.warn) + message
    );
  });

  it("Should console.error passed message with prefix", () => {
    consoleLog(message, LOG_LEVEL.error);
    expect(console[LOG_LEVEL.error]).toHaveBeenCalledWith(
      getConsoleLogPrefix(LOG_LEVEL.error) + message
    );
  });
});
