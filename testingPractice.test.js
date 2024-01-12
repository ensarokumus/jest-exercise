import sum from "./sum";
import capitalise from "./capitalise";
import reverseString from "./reverseString";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Capitalised the first character", () => {
  expect(capitalise("team")).toMatch(/Team/);
  expect(capitalise("the quick brown fox jumps over the lazy dog.")).toMatch(
    /The quick brown fox jumps over the lazy dog./
  );
  expect(capitalise(" gotcha")).toMatch(/ gotcha/);
  expect(capitalise("7news")).toMatch(/7news/);
});
