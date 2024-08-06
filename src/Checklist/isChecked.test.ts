import { isChecked } from "./isChecked";

test("Should return true when call isChecked function", () => {
  const result = isChecked([1, 2, 3], 2);
  expect(result).toBe(true);
});

test("Should return false when call isChecked function", () => {
  const result = isChecked([1, 2, 3], 5);
  expect(result).toBe(false);
});
