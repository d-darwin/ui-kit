const LOG_LEVEL_TYPE = {
  log: "log",
  warn: "warn",
  error: "error",
} as const;

type LogLevelType = typeof LOG_LEVEL_TYPE[keyof typeof LOG_LEVEL_TYPE];

/**
 * Add source (library name) to the warnings
 *
 * @param message {string}
 * @param level {LogLevelType}
 */
export default function consoleLog(
  message: string,
  level: LogLevelType = LOG_LEVEL_TYPE.log
): void {
  const prefix = `[@darwin-studio/ui-kit ${level}]: `;
  console[level](prefix + message);
}
