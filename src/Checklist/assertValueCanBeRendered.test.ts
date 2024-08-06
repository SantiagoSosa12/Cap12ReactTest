import { assertValueCanBeRendered } from "./assertValueCanBeRendered";

test("Should raise exeption when not a string or number", () => {
  expect(() => {
    assertValueCanBeRendered(true);
  }).toThrow("value is not a string or a number");
});

test("Should not raise exeption when string", () => {
  expect(() => {
    assertValueCanBeRendered("something");
  }).not.toThrow("value is not a string or a number");
});

test("Should not raise exeption when a number", () => {
  expect(() => {
    assertValueCanBeRendered(99);
  }).not.toThrow("value is not a string or a number");
});
