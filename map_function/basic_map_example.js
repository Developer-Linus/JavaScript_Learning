const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num)=>{
    return num * 2;
}
);
console.log(doubledNumbers);

// map() function iterates over each element in numbers array.
// For each element it multiplies it by 2.
// doubledNumbers stores the new array.

// This code can be made more concise using arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num=>num*2); // using arrow function for conciseness.
console.log(doubledNumbers);