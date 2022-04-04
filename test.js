//-------------- UNIT TESTS ----------------//

//  IMPORT DES FONCTIONS
const { isEvenNumber, formatDate } = require("./utils/functions");

//*  IS EVEN
test("if number is even, return true", () => {
  const result = isEvenNumber(18);
  expect(result).toBe(true);
});

// *! Odd number
test("if number is odd, return false", () => {
  const result = isEvenNumber(15);
  expect(result).toBe(false);
});

//* IS EVEN BONUS
test("if it's a string", () => {
  const result = isEvenNumber("string");
  expect(result).toBe(false);
});

test("if it's a string of numbers", () => {
  const result = isEvenNumber("20");
  expect(result).toBe(true);
});

// * FORMAT DATE
test("if date format is `yyyy-mm-dd` return date format `dd/mm/yyyy`, else if date format is not valid, return `null`", () => {
  const result = formatDate("2022-04");
  expect(result).toBe(null);
});
