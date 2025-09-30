// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".


function convertToCamelCase(str) {
  const words = str.split(/[_ ]+/); //pendient review  again 
  const firstWord = words[0].toLowerCase(); 
  const restWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return [firstWord, ...restWords].join(""); 
}

console.log(convertToCamelCase("hello_world")); // "helloWorld"
console.log(convertToCamelCase("convert to camel_case")); // "convertToCamelCase"
