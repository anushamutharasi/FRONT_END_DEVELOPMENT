
/**
 * variable is a function scoped
 */

function variable_example(){
  //redecalering the variable x
  //this will not affect the global variable x
  //because it is declared with var inside the function

  var x = 30; // updating the value of x with 30 and re-declared also
  if (true) {
    var x=40
    console.log("Value of x inside function: " + x); 
  }
  // we are accessing the variable outside the if block
  // it will still be 30 because it is declared with var

  console.log("Value of x inside function but outside if statement: " + x); 
} 

variable_example();

/**
 * let is a block-scoped variable declaration that allows you to declare variables that are limited to the scope of a block statement, or expression.
 * It is similar to var, but it does not allow you to redeclare the same variable within the same scope.
 * let is useful for creating variables that are only needed within a specific block of code, such as a loop or an if statement.
 */



function letExample(){
  
    if (true) {
        let y = 40; // redeclaring the variable y with let inside the if block
        //let y=90;//here we are redeclaring the variable y with let but we will get an error because we cannot redeclare a variable with let in the same scope
        console.log("Value of y inside if block: " + y); // 40
    }       
    // we are accessing the variable outside the if block
    // it will throw an error because y is not defined outside the if block/
    //uncommnet the below line to see the error
    //console.log("Value of y outside if block: " + y); // Uncaught ReferenceError: y is not defined
    // To access the variable y outside the if block, we need to declare it with var.





}
letExample()

/**
 * const is a block-scoped variable declaration that allows you to declare variables that are read-only, meaning their value cannot be changed once they are assigned.
 * It is similar to let, but it does not allow you to change the value of the variable after it is declared.
 * const is useful for creating variables that are constants, such as mathematical constants or configuration values.
 */


function constExample() {
    const z = 50; // declaring a constant variable z with const
    console.log("Value of z: " + z); // 50

    // trying to change the value of z will throw an error
    //uncomment the below line to see the error
    //z = 60; // Uncaught TypeError: Assignment to constant variable.
    
    if (true) {
        const z = 60; // redeclaring the variable z with const inside the if block
        console.log("Value of z inside if block: " + z); // 60
    }
    
    console.log("Value of z outside if block: " + z); // 50
}
constExample();


/**
 * datatypes in javascript
 */

// Primitive data types
let number = 42; //
let string = "Hello, World!"; // String
let boolean = true; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null
let symbolVar = Symbol("unique"); // Symbol
let bigintVar = BigInt(12345678901234567890); // BigInt
// Non-primitive data types
let objectVar = { key: "value" }; // Object
let arrayVar = [1, 2, 3, 4, 5]; // Array
// Function as a first-class object
let functionVar = function() {
    console.log("This is a function.");
}       
functionVar(); // Calling the function
// Using typeof to check data types
console.log("Type of number:", typeof number); // "number"
console.log("Type of string:", typeof string); // "string"
console.log("Type of boolean:", typeof boolean); // "boolean"
console.log("Type of undefinedVar:", typeof undefinedVar); // "undefined"   
console.log("Type of nullVar:", typeof nullVar); // "object" (this is a known quirk in JavaScript)
console.log("Type of symbolVar:", typeof symbolVar); // "symbol"
console.log("Type of bigintVar:", typeof bigintVar); // "bigint"
console.log("Type of objectVar:", typeof objectVar); // "object"
console.log("Type of arrayVar:", typeof arrayVar); // "object" (arrays are a type of object)
console.log("Type of functionVar:", typeof functionVar); // "function"
// Using instanceof to check for specific types
console.log("Is objectVar an object?", objectVar instanceof Object); // true
console.log("Is arrayVar an array?", arrayVar instanceof Array); // true
console.log("Is functionVar a function?", functionVar instanceof Function); // <true>   
// Using Array.isArray to check if a variable is an array
console.log("Is arrayVar an array?", Array.isArray(arrayVar)); // true
// Using Object.prototype.toString to check data types
console.log("Type of objectVar:", Object.prototype.toString.call(objectVar)); //
    "[object Object]"
console.log("Type of arrayVar:", Object.prototype.toString.call(arrayVar)); // "[object Array]"
console.log("Type of functionVar:", Object.prototype.toString.call(functionVar)); // "[objectFunction]"
// Using JSON.stringify to convert objects to strings
console.log("JSON representation of objectVar:", JSON.stringify(objectVar)); // '{"key":"value"}'
console.log("JSON representation of arrayVar:", JSON.stringify(arrayVar)); // "[1,2,3,4,5]" 
// Using JSON.stringify to convert functions to strings (functions are not serializable)
console.log("JSON representation of functionVar:", JSON.stringify(functionVar)); // undefined
// Using JSON.stringify to convert symbols to strings (symbols are not serializable)
console.log("JSON representation of symbolVar:", JSON.stringify(symbolVar)); // undefined
// Using JSON.stringify to convert BigInt to strings (BigInt is not serializable)
console.log("JSON representation of bigintVar:", JSON.stringify(bigintVar)); // undefined

// Using JSON.stringify to convert undefined to strings (undefined is not serializable)
console.log("JSON representation of undefinedVar:", JSON.stringify(undefinedVar)); // undefined
// Using JSON.stringify to convert null to strings (null is serializable)
console.log("JSON representation of nullVar:", JSON.stringify(nullVar)); // null
// Using JSON.stringify to convert boolean to strings (boolean is serializable)
console.log("JSON representation of boolean:", JSON.stringify(boolean)); // "true"
// Using JSON.stringify to convert number to strings (number is serializable)
console.log("JSON representation of number:", JSON.stringify(number)); // "42"
// Using JSON.stringify to convert string to strings (string is serializable)
console.log("JSON representation of string:", JSON.stringify(string)); // ""Hello, World!""
// Note: JSON.stringify converts only serializable values to strings. Non-serializable values like functions, symbols, BigInt, and undefined will be converted to undefined in the JSON representation.
// Example of using Symbol as a unique identifier
// Symbols are unique and immutable data types that can be used as identifiers for object properties
const uniqueId = Symbol("id");
const anotherId = Symbol("id");
console.log(uniqueId === anotherId); // false, even though they have the same description, they are different symbols