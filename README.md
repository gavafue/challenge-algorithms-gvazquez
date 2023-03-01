
## Lexart Labs Technical Challenge - Algorithms and Data Structures

### Introduction

This project contains a solution to a technical challenge proposed by Lexart Labs, which involves the creation of algorithms that work with arrays, hash maps (or simple objects), and string manipulation.

### Requirements

The following are the requirements for this project:

#### Array Algorithms

-   Create an algorithm that runs through a one-dimensional array containing letters and numbers: `[ "a", 10, "b", "hola", 122, 15 ]`
-   Get an array containing just the letters
-   Get an array containing just the numbers
-   Get the highest number from the array above

#### Hash Map / Object

-   Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
-   Take into account that the division must not allow 0 dividend
-   The sum function allows an array as an input parameter and adds all its elements.
-   The subtraction function allows an array as an input parameter and subtracts all its elements.
-   Multiplication Function - Ditto
-   The division function accepts two parameters: a and b.

#### Random ID Generator

-   Create an algorithm that generates the following random ID pattern: `XXXX-AAAA-BBBB-CCCC`
-   Where `XXXX`, `AAAA`, `BBBB` and `CCCC` patterns are random alphanumeric
-   The default is a string: `"XXXX-AAAA-BBBB-CCCC"`
-   The result must be stored in a variable.

### Solution

The solution to the requirements outlined above is implemented in a JavaScript file named `index.js`. Here's a breakdown of the code and how it addresses the requirements:

#### Array Algorithms

The first part of the code deals with the array algorithms requirement. The `originalArray` variable contains the array `[ "a", 10, "b", "hola", 122, 15 ]`, which is the input for the algorithms.

To get an array containing just the letters, the `getLettersFromArray` function uses the `filter` method to remove any element that is not a string. Conversely, to get an array containing just the numbers, the `getNumbersFromArray` function uses the `filter` method to remove any element that is not a number or is NaN.

To get the highest number from the array, the `getHighestNumber` function first calls the `getNumbersFromArray` function to obtain an array of numbers, and then uses the `Math.max` method to return the highest number from that array.

#### Hash Map / Object

The second part of the code creates a hash map named `calculator`, which contains four elementary functions: `add`, `subtract`, `multiply`, and `divide`. The `add`, `subtract`, and `multiply` functions all accept an array of numbers as an input parameter and return the sum, difference, and product of all elements in the array, respectively.

The `divide` function accepts two parameters: `dividend` and `divisor`. If either parameter is not a number, the function throws an error. If the `divisor` parameter is 0, the function throws an error as well (to avoid division by zero). Otherwise, the function returns the quotient of `dividend` divided by `divisor`.

#### Random ID Generator

The third and final part of the code generates a random ID pattern according to the format `XXXX-AAAA-BBBB-CCCC`. To achieve this, the `generateId` function creates a string variable named `id` and iterates over each character in the ID pattern. If the character is an "X", a random alphanumeric character is added to the variable and if the character is " - " that is added for the variable, then the variable is returned.