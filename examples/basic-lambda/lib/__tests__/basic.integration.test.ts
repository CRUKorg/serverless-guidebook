import { Lambda } from "aws-sdk";
import { HandlerResponse } from "../basic";

const { AWS_REGION } = process.env;

if (typeof AWS_REGION === "undefined") {
  throw new Error("AWS_REGION is undefined");
}

const lambda = new Lambda({ region: AWS_REGION });

test("Basic Lambda function invoked successfully", async () => {
  try {
    expect.assertions(1);

    const invokeCommandResponse = await lambda
      .invoke({ FunctionName: "BasicLambda" })
      .promise();

    if (!invokeCommandResponse.Payload) {
      throw new Error("No response payload");
    }

    const { message }: HandlerResponse = JSON.parse(
      Buffer.from(invokeCommandResponse.Payload).toString()
    );

    expect(message).toBe("Hello, Lambda!");
  } catch (error) {
    console.error(error);
  }
});
