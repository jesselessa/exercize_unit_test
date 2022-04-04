//-------------- UNIT TESTS ----------------//

const isEvenNumber = require("./utils/isEvenNumber");

test("if number is even", () => {
  const result = isEvenNumber(18);
  expect(result).toBe(true);
});
