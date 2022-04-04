//-------------- UNIT TESTS ----------------//

// * Even number
const isEvenNumber = require("./utils/isEvenNumber");

test("if number is even", () => {
  const result = isEvenNumber(18);
  expect(result).toBe(true);
});

// * Odd number
test("if number is Odd", () => {
  const result = isEvenNumber(15);
  expect(result).toBe(false);
});
