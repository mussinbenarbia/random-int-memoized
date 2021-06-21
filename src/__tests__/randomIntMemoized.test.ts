import { randomIntMemoized } from "../index";

test("can generate unique random integers", () => {
  const lowerBound = 0;
  const upperBound = 5;
  const random = randomIntMemoized(lowerBound, upperBound);
  const result = [];
  for (let i = lowerBound; i <= upperBound; i++) {
    result.push(random());
  }
  expect(result.sort()).toEqual([0, 1, 2, 3, 4, 5]);
});

test("only starts over after running out of unique values", () => {
  const lowerBound = 0;
  const upperBound = 5;
  const random = randomIntMemoized(lowerBound, upperBound);
  const result = [];
  for (let i = lowerBound; i <= upperBound; i++) {
    result.push(random());
  }
  for (let i = lowerBound; i <= upperBound; i++) {
    result.push(random());
  }
  expect(result.sort()).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
});
