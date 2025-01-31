// map() function can be chained with other array methods like filter(), reduce() etc. for more complex operations
const numbers = [1, 2, 3, 4, 5];

const result = numbers
.filter(number=> number%2 !== 0) // Keep only odd numbers.
.map(number=>Math.pow(number, 2)); // Square the remaining numbers (odd numbers).
console.log(result);
