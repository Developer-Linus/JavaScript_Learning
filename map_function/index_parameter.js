// map() function takes index of the current element as the second argument in the callback function.
const numbers = [10, 20, 30, 40, 50];

const indexedNumbers = numbers.map((num, index)=>{
    return num + index;
});
console.log(indexedNumbers);