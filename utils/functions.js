function isEvenNumber(number) {
  if (number === NaN) {
    return parseInt(number);
  }

  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function formatDate(string) {
  if (string.length !== 10) {
    return null;
  }
  if (typeof string !== "string") {
    return null;
  }
  const date = new Date(string),
    years = date.getFullYear(),
    months = (date.getMonth() + 1).toString().padStart(2, "0"),
    days = date.getDate();
  return `${days}/${months}/${years}`;
}

module.exports = {
  isEvenNumber,
  formatDate,
};
