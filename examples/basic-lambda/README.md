## Basic Lambda function

A basic Lambda function with TypeScript and Jest.

## Compile function

The Lambda function is written in TypeScript. To compile the function to JavaScript run:

```sh
yarn build
```

## Test function

### Integration tests

To execute the function's integration test suite run:

```sh
AWS_REGION=<region> yarn test:integration
```

Note: You will need to deploy the function first, with the function name "BasicLambda".

### Unit tests

To execute the function's unit test suite run:

```sh
yarn test:unit
```
