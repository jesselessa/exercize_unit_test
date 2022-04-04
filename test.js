//-------------- UNIT TESTS ----------------//

const isEvenNumber = require("./utils/isEvenNumber");

//*  IS EVEN
test("if number is even", () => {
  const result = isEvenNumber(18);
  expect(result).toBe(true);
});

// *! Odd number
test("if number is Odd", () => {
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
