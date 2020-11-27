import { logger } from "../logger";

test("Should log log when log level is VERBOSE", () => {
  console.log = jest.fn();

  const log = logger("VERBOSE", { service: "some-service-name" });

  log.log({ event: {}, message: "Log log" });

  expect(console.log).toHaveBeenCalledTimes(1);
});

test("Should not log log when log level is DEBUG", () => {
  console.log = jest.fn();

  const log = logger("DEBUG", { service: "some-service-name" });

  log.log({ event: {}, message: "Log log" });

  expect(console.log).not.toHaveBeenCalled();
});

test("Should not log log when log level is INFO", () => {
  console.log = jest.fn();

  const log = logger("INFO", { service: "some-service-name" });

  log.log({ event: {}, message: "Log log" });

  expect(console.log).not.toHaveBeenCalled();
});

test("Should not log log when log level is WARN", () => {
  console.log = jest.fn();

  const log = logger("WARN", { service: "some-service-name" });

  log.log({ event: {}, message: "Log log" });

  expect(console.log).not.toHaveBeenCalled();
});

test("Should not log log when log level is ERROR", () => {
  console.log = jest.fn();

  const log = logger("ERROR", { service: "some-service-name" });

  log.log({ event: {}, message: "Log log" });

  expect(console.log).not.toHaveBeenCalled();
});

test("Should log debug when log level is VERBOSE", () => {
  console.debug = jest.fn();

  const log = logger("VERBOSE", { service: "some-service-name" });

  log.debug({ event: {}, message: "Debug log" });

  expect(console.debug).toHaveBeenCalledTimes(1);
});

test("Should log debug when log level is DEBUG", () => {
  console.debug = jest.fn();

  const log = logger("DEBUG", { service: "some-service-name" });

  log.debug({ event: {}, message: "Debug log" });

  expect(console.debug).toHaveBeenCalledTimes(1);
});

test("Should not log debug when log level is INFO", () => {
  console.debug = jest.fn();

  const log = logger("INFO", { service: "some-service-name" });

  log.debug({ event: {}, message: "Debug log" });

  expect(console.debug).not.toHaveBeenCalled();
});

test("Should not log debug when log level is WARN", () => {
  console.debug = jest.fn();

  const log = logger("WARN", { service: "some-service-name" });

  log.debug({ event: {}, message: "Debug log" });

  expect(console.debug).not.toHaveBeenCalled();
});

test("Should not log debug when log level is ERROR", () => {
  console.debug = jest.fn();

  const log = logger("ERROR", { service: "some-service-name" });

  log.debug({ event: {}, message: "Debug log" });

  expect(console.debug).not.toHaveBeenCalled();
});

test("Should log info when log level is VERBOSE", () => {
  console.info = jest.fn();

  const log = logger("VERBOSE", { service: "some-service-name" });

  log.info({ event: {}, message: "Info log" });

  expect(console.info).toHaveBeenCalledTimes(1);
});

test("Should log info when log level is DEBUG", () => {
  console.info = jest.fn();

  const log = logger("DEBUG", { service: "some-service-name" });

  log.info({ event: {}, message: "Info log" });

  expect(console.info).toHaveBeenCalledTimes(1);
});

test("Should log info when log level is INFO", () => {
  console.info = jest.fn();

  const log = logger("INFO", { service: "some-service-name" });

  log.info({ event: {}, message: "Info log" });

  expect(console.info).toHaveBeenCalledTimes(1);
});

test("Should not log info when log level is WARN", () => {
  console.info = jest.fn();

  const log = logger("WARN", { service: "some-service-name" });

  log.info({ event: {}, message: "Info log" });

  expect(console.info).not.toHaveBeenCalled();
});

test("Should not log info when log level is ERROR", () => {
  console.info = jest.fn();

  const log = logger("ERROR", { service: "some-service-name" });

  log.info({ event: {}, message: "Info log" });

  expect(console.info).not.toHaveBeenCalled();
});

test("Should log warn when log level is VERBOSE", () => {
  console.warn = jest.fn();

  const log = logger("VERBOSE", { service: "some-service-name" });

  log.warn({ event: {}, message: "Warn log" });

  expect(console.warn).toHaveBeenCalledTimes(1);
});

test("Should log warn when log level is DEBUG", () => {
  console.warn = jest.fn();

  const log = logger("DEBUG", { service: "some-service-name" });

  log.warn({ event: {}, message: "Warn log" });

  expect(console.warn).toHaveBeenCalledTimes(1);
});

test("Should not log warn when log level is INFO", () => {
  console.warn = jest.fn();

  const log = logger("INFO", { service: "some-service-name" });

  log.warn({ event: {}, message: "Warn log" });

  expect(console.warn).toHaveBeenCalledTimes(1);
});

test("Should log warn when log level is WARN", () => {
  console.warn = jest.fn();

  const log = logger("WARN", { service: "some-service-name" });

  log.warn({ event: {}, message: "Warn log" });

  expect(console.warn).toHaveBeenCalledTimes(1);
});

test("Should not log warn when log level is ERROR", () => {
  console.warn = jest.fn();

  const log = logger("ERROR", { service: "some-service-name" });

  log.warn({ event: {}, message: "Warn log" });

  expect(console.warn).not.toHaveBeenCalled();
});

test("Should log error when log level is VERBOSE", () => {
  console.error = jest.fn();

  const log = logger("VERBOSE", { service: "some-service-name" });

  log.error({ event: {}, message: "Error log" });

  expect(console.error).toHaveBeenCalledTimes(1);
});

test("Should log error when log level is DEBUG", () => {
  console.error = jest.fn();

  const log = logger("DEBUG", { service: "some-service-name" });

  log.error({ event: {}, message: "Error log" });

  expect(console.error).toHaveBeenCalledTimes(1);
});

test("Should not log error when log level is INFO", () => {
  console.error = jest.fn();

  const log = logger("INFO", { service: "some-service-name" });

  log.error({ event: {}, message: "Error log" });

  expect(console.error).toHaveBeenCalledTimes(1);
});

test("Should log error when log level is WARN", () => {
  console.error = jest.fn();

  const log = logger("WARN", { service: "some-service-name" });

  log.error({ event: {}, message: "Error log" });

  expect(console.error).toHaveBeenCalledTimes(1);
});

test("Should log error when log level is ERROR", () => {
  console.error = jest.fn();

  const log = logger("ERROR", { service: "some-service-name" });

  log.error({ event: {}, message: "Error log" });

  expect(console.error).toHaveBeenCalledTimes(1);
});
