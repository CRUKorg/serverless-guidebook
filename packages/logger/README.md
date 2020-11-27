# Console Logger Utility

Uniform, structured logs for robust log analysis and log aggregation.

## Usage

This package can be imported by any other package in this repository:

```ts
import { logger } from "../../util-console-logger";
```

### Setup

The logger can be configured with a log level and any metadata that should be included in each log:

```ts
const log = logger("INFO", {
  service: "some-service-name"
});
```

### Logging

The logger can then be used to log at any of the defined levels. Logs will only be fired according to the log level defined during setup.

```ts
log.log("Logs when log level is VERBOSE");
log.debug("Logs when log level is DEBUG or VERBOSE");
log.info("Logs when log level is INFO, DEBUG or VERBOSE");
log.warn("Logs when log level is WARN, INFO, DEBUG or VERBOSE");
log.error("Logs when log level is ERROR, WARN, INFO, DEBUG or VERBOSE");
```
