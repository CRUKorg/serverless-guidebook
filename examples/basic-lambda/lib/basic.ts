import { Handler } from "aws-lambda";

export type HandlerResponse = {
  message: string;
};

export const sayHello = (): string => {
  return "Hello, Lambda!";
};

export const handler: Handler = async (): Promise<HandlerResponse> => {
  const message = sayHello();

  return {
    message: message,
  };
};
