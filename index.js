const originalArray = ["a", 10, "b", "hello", 122, 15];

console.log("Original array:", originalArray);

const getNumbersFromArray = (array) =>
  array.filter((element) => typeof element === "number" && !isNaN(element));
const numbersArray = getNumbersFromArray(originalArray);
console.log("Numbers of array:", numbersArray);

const getLettersFromArray = (array) =>
  array.filter((element) => typeof element === "string");
console.log("Letters of array:", getLettersFromArray(originalArray));

const getHighestNumber = (array) => Math.max(...getNumbersFromArray(array));
console.log("Highest number of array:", getHighestNumber(originalArray));

const calculator = {
  add: function (numbers) {
    if (
      !Array.isArray(numbers) ||
      !numbers.every((number) => typeof number === "number")
    ) {
      throw new Error(
        "Invalid argument. The argument must be an array of numbers."
      );
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },

  subtract: function (numbers) {
    if (
      !Array.isArray(numbers) ||
      !numbers.every((number) => typeof number === "number")
    ) {
      throw new Error(
        "Invalid argument. The argument must be an array of numbers."
      );
    }
    let difference = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      difference -= numbers[i];
    }
    return difference;
  },

  multiply: function (numbers) {
    if (
      !Array.isArray(numbers) ||
      !numbers.every((number) => typeof number === "number")
    ) {
      throw new Error(
        "Invalid argument. The argument must be an array of numbers."
      );
    }
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  },

  divide: function (dividend, divisor) {
    if (typeof dividend !== "number" || typeof divisor !== "number") {
      throw new Error("Invalid argument. The arguments must be numbers.");
    } else if (divisor === 0) {
      throw new Error("Invalid argument. The divisor must not be zero.");
    } else {
      return dividend / divisor;
    }
  },
};

console.log("Sum of array:", calculator.add(numbersArray));
console.log("Difference of array:", calculator.subtract(numbersArray));
console.log("Product of array:", calculator.multiply(numbersArray));
console.log("Division of 10/15:", calculator.divide(10, 15));

function generateId() {
  const idPattern = "XXXX-XXXX-XXXX-XXXX";
  const options =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < idPattern.length; i++) {
    const char = idPattern[i];

    if (char === "X") {
      const randomIndex = Math.floor(Math.random() * options.length);
      id += options.charAt(randomIndex);
    } else if (char === "-") {
      id += "-";
    } else {
      throw new Error(`Invalid character in id pattern: ${char}`);
    }
  }

  return id;
}

console.log("Generated ID:", generateId());
