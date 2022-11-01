//addExample.test.ts
/// <reference types="jest" />

import { addExample } from "./addExample";
test("addExample test", () => {
  expect(addExample(2, 2)).toBe(4);
  expect(addExample(3, 0.5)).toBe(3.5);
});
