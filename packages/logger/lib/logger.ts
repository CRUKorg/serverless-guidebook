enum LogLevels {
  VERBOSE = 1,
  DEBUG = 2,
  INFO = 3,
  WARN = 4,
  ERROR = 5,
}

export type LogLevelStrings = keyof typeof LogLevels;

interface Log {
  debug: (message: LogMessage) => void;
  error: (message: LogMessage) => void;
  info: (message: LogMessage) => void;
  log: (message: LogMessage) => void;
  warn: (message: LogMessage) => void;
}

interface LogMessage {
  correlationID?: string;
  error?: Error;
  event: any;
  message: string;
  stack?: string;
}

interface LogMeta {
  service: string;
  [key: string]: any;
}

const debug = (level: LogLevels, message: LogMessage, meta: LogMeta): void => {
  if (level > LogLevels.DEBUG) {
    return;
  }

  console.debug(
    JSON.stringify({ level: LogLevels.DEBUG, ...message, ...meta })
  );
};

const error = (level: LogLevels, message: LogMessage, meta: LogMeta): void => {
  if (level > LogLevels.ERROR) {
    return;
  }

  console.error(
    JSON.stringify({ level: LogLevels.ERROR, ...message, ...meta })
  );
};

const info = (level: LogLevels, message: LogMessage, meta: LogMeta): void => {
  if (level > LogLevels.INFO) {
    return;
  }

  console.info(JSON.stringify({ level: LogLevels.INFO, ...message, ...meta }));
};

const log = (level: LogLevels, message: LogMessage, meta: LogMeta): void => {
  if (level > LogLevels.VERBOSE) {
    return;
  }

  console.log(
    JSON.stringify({ level: LogLevels.VERBOSE, ...message, ...meta })
  );
};

const warn = (level: LogLevels, message: LogMessage, meta: LogMeta): void => {
  if (level > LogLevels.WARN) {
    return;
  }

  console.warn(JSON.stringify({ level: LogLevels.WARN, ...message, ...meta }));
};

export const logger = (levelString: LogLevelStrings, meta: LogMeta): Log => {
  const level = LogLevels[levelString];

  return {
    debug: (message: LogMessage): void => debug(level, message, meta),
    error: (message: LogMessage): void => error(level, message, meta),
    info: (message: LogMessage): void => info(level, message, meta),
    log: (message: LogMessage): void => log(level, message, meta),
    warn: (message: LogMessage): void => warn(level, message, meta),
  };
};
