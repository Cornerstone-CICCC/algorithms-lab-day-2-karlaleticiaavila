// Exercise 16: Use chaining to double the even numbers and then sum them.
// Example: [3, 10, 15, 7, 22, 18] → 100
// Use method chaining and write the solution in one line



//even numbers

const numbers = [3, 10, 15, 7, 22, 18];

console.log(
  numbers
    .filter(n => n % 2 === 0)        
    .map(n => n * 2)                 
    .reduce((sum, n) => sum + n, 0) 
); 
// Expected output: 100
