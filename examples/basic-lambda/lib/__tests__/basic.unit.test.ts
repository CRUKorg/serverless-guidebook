import { sayHello } from "../basic";

test("Say Hello, Lambda!", () => {
  console.log = jest.fn();

  const response = sayHello();

  expect(response).toBe("Hello, Lambda!");
});
