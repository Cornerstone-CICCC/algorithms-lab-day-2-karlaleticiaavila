// Exercise 9: Write a function `sortByProperty` that takes an array of objects
// and a property name, and returns the array sorted by that property in ascending order.
// Example: sortByProperty([{name: "Alice", age: 30}, {name: "Bob", age: 25}], "age")
// should return [{name: "Bob", age: 25}, {name: "Alice", age: 30}].


function sortByProperty(arr, prop) {
  return arr.sort((a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  });
}

const people = [
  {name: "Alice", age: 30},
  {name: "Bob", age: 25}
];

console.log(sortByProperty(people, "age")); 
