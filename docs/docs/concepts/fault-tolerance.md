---
id: fault-tolerance
title: Fault Tolerance
---

Coming Soon 👀

> Everything fails all the time

_Werner Vogels, CTO @ Amazon_

For more information see:

- [How to fail with serverless (talk)](https://www.youtube.com/watch?v=H0oMfK2cwFY)
- [Why Serverless Apps Fail and How to Design Resilient Architectures](https://dashbird.io/blog/why-serverless-apps-fail-and-how-to-design-resilient-architectures/)
- [Designing robust and predictable APIs with idempotency](https://stripe.com/blog/idempotency)

<!-- retry behaviours and strategies for dealing with errors

- Lambda is stateless, ephemeral compute and uses a single-concurrency model (each request is isolated). No concept of “session” or “global state”.
- Traditional error handling and retry: try/catch block
- But with ephemeral compute we have to ask “What happens to the original event?” “What happens if the function doesn’t actually run” - all adds up to possibility of “losing an event”
- Function error types:
    - Unhandled Exceptions
    - Function Timeouts
    - Memory Exceeded
    - Function Throttle
- Dead Letter Queues
- Lambda Destinations
- EventBridge attempts to re-deliver messages with 24 hour exponential backoff

Asynchronous Lambda function invocations
Event source mappings
Step Functions
Lambda invocations from AWS services
Calls to AWS services
Third-party API calls -->
