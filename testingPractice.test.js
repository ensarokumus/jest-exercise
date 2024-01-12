import sum from "./sum";
import capitalise from "./capitalise";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";

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

test("Reversed the string", () => {
  expect(reverseString("team")).toMatch(/maet/);
  expect(reverseString("the quick brown fox ")).toMatch(/ xof nworb kciuq eht/);
});

test("Calculator works", () => {
  expect(calculator.add(4, 5)).toBeCloseTo(9);
  expect(calculator.add(4.4, 1.8)).toBeCloseTo(6.2);
  expect(calculator.subtract(4, 5)).toBeCloseTo(-1);
  expect(calculator.subtract(2.8, 4.8)).toBeCloseTo(-2);
  expect(calculator.divide(4, 5)).toBeCloseTo(0.8);
  expect(calculator.divide(-1, 2)).toBeCloseTo(-0.5);
  expect(calculator.multiply(4, 5)).toBeCloseTo(20);
  expect(calculator.multiply(4, 0)).toBeCloseTo(0);
});

const unencrypted =
  "Z Julius Caesar used the Shift Cipher!";

const encrypted =
  "B Lwnkwu Ecguct wugf vjg Ujkhv Ekrjgt!";

test("caesarCipher works wrapping from z to a", () => {
  expect(caesarCipher(unencrypted, 2)).toBe(encrypted);
});

test("caesarCipher works for keeping the same case", () => {
  expect(caesarCipher(unencrypted, 2)).toBe(encrypted);
});
