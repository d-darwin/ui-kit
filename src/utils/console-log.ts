export const LOG_LEVEL = {
  log: "log",
  warn: "warn",
  error: "error",
} as const;

type LogLevelType = typeof LOG_LEVEL[keyof typeof LOG_LEVEL];

/**
 * Add source (library name) to the warnings
 *
 * @param message {string}
 * @param level {LogLevelType}
 */
export default function consoleLog(
  message: string,
  level: LogLevelType = LOG_LEVEL.log
): void {
  console[level](getConsoleLogPrefix(level) + message);
}

export function getConsoleLogPrefix(level: LogLevelType): string {
  return `[@darwin-studio/ui-kit ${level}]: `;
}
