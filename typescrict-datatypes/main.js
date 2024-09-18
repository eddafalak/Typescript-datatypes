1.; // the variable age is assigned the value 30. The var name is assigned John
var greeting = "Hello World!";
console.log(greeting);
var age = 30;
var surname = "John";
console.log(age);
console.log(surname);
// const: this declares a constant variable, meaning that the refrence to the numbers array connot be reassigned to something else.
// The variable numbers is typed as an array of numbers.
// [1 ,2, 3] is the initial array assigned to numbers
// push (4) is a method that adds a new element 4 to the end of the array. 
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
2.; // Here are the result of arithmetic operations
var a = 10;
var b = 3;
// arithmetic operations
var addition = a + b;
var subtraction = a - b;
var multiply = a * b;
var division = a / b;
var modulus = a % b;
console.log(addition);
console.log(subtraction);
console.log(multiply);
console.log(division);
console.log(modulus);
3.; // The result of string concatenations
var firstName = "Edda";
var lastName = "Falak";
// concatention using the + operator. The quotes are for space between names
var fullName = firstName + " " + lastName;
console.log(fullName);
var aldur = 30;
var city = "New York";
// concatention using template literals. Template literals allows me to embed variables directly into strings using ${} within backticks
var description = "Name: ".concat(firstName, " ").concat(lastName, " Aldur: ").concat(aldur, " City: ").concat(city);
console.log(description);
4.; // Truthy or falsy values
// "truthy" and "falsy" values are used to determine whether a value is treated as true or fales in conditional statement like if. 
// Falsy values: false, 0, "" (empty string), null, undefined, NaN
// truthy values: everything else (non-empty strings, non-zero  numbers, objects, arrays, etc.)
var falsyValue1 = 0;
var falsyValue1 = "";
var truthyValue1 = "Hello";
var truthyValue1 = "42";
if (falsyValue1) {
    console.log("FalsyValue1 is truthy");
}
else {
    console.log("FalsyValue1 is falsy"); // This will execute because 0 is falsy
}
if (falsyValue1) {
    console.log("FalsyValue2 is truthy");
}
else {
    console.log("FalsyValue2 is falsy"); // This will execute because an empty string is falsy
}
if (truthyValue1) {
    console.log("TruthyValue1 is truthy"); // This will execute because "hello" is truthy
}
else {
    console.log("TruthyValue1 is falsy");
}
if (truthyValue1) {
    console.log("TruthyValue2 is truthy"); // This will execute because 42 is truthy
}
else {
    console.log("TruthyValue2 is falsy");
}
5.; // Here is how I created an array with multiple values
var fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
// Output one of the items 
console.log(fruits[1]);
//Output the number of items in the array using the length property
var numberOfItems = fruits.length;
console.log(numberOfItems);
6.; // Create an object
var person = {};
// Add properties to the object
person.name = "Edda";
person.age = 30;
person.city = "New York";
console.log(person);
// Remove a property
delete person.city;
console.log(person);
//Output specific properties
console.log(person.name);
console.log(person.age);
7.; //demonstrate one Math method
// I will use Math.random() method, which generates a random number between 0 and 1
var randomNumber = Math.random();
console.log(randomNumber);
// random integer between 1 and 100. Math.floor rounds a number down to the nearest integer. Adding 1 shifts the range to 1 to 100
var randomInteger = Math.floor(Math.random() * 100) + 1;
console.log(randomInteger);
8.; // To output the current date and time when the file is opened using js or ts, you can use the date object
var currentDateTime = new Date();
//format the date and time as a string
var formattedDateTime = currentDateTime.toLocaleString();
console.log(formattedDateTime);
9.; // Strict mode
// When strict is enabled, typescript will enforce stricter type checking. Heres an example
function greet(Alice) {
    console.log("Hello," + name);
}
