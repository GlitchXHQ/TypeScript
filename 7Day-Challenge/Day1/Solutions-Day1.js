"use strict";
// (Easy) Declare variables name, age, and isStudent with explicit types (string, number, boolean) and log them.
Object.defineProperty(exports, "__esModule", { value: true });
let Name = "Peter Parker";
let Age = 21;
let isStudent = false;
console.log("Name: ", Name, " Age: ", Age, " isStudent: ", isStudent);
//===================================================X=======================================X============================================================================================================X=================================
// (Easy) Create an array scores that can only hold numbers. Try pushing a string into it and see the error TS gives you.
let arrayScores = [1, 2, 3, 4, 5];
//arrayScores.push("Hello")
arrayScores.push(21);
console.log("Array Scores: ", arrayScores);
console.log("Gives Error: Argument of type 'string' is not assignable to parameter of type 'Number'");
//===================================================X=======================================X============================================================================================================X=================================
// (Easy) Create a tuple person that holds exactly [string, number] (name, age). Try adding a third element and observe the error.
let tuple1 = ["Ramesh", 21];
console.log(tuple1);
// (Easy) Write a function greet(name: string): string that returns "Hello, <name>!".
function greet(Name) {
    return `Hello, ${Name}!`;
}
let output = greet("Alex");
console.log(output);
//===================================================X=======================================X============================================================================================================X=================================
// # MEDIUM #
// (Medium) Write a function add(a: number, b: number): number. 
function add(a, b) {
    return a + b;
}
let ans = add(2, 3);
console.log("Addition: ", ans);
// (Medium) Strict Math Functions: Write a typed function calculateTax(price: number, taxRate: number = 0.18): number that handles default tax rates and rejects invalid numeric values.
function calculateTax(price, taxRate = 0.18) {
    return price * taxRate;
}
let tax = calculateTax(100);
let taxNew = calculateTax(100, 20);
console.log("Tax: ", tax);
console.log("Tax (New): ", taxNew);
// (Medium) Optional Parameters: Create a function formatName(firstName: string, lastName?: string): string that returns "First Last" if lastName exists, or just "First".
function printName(firstName, LastName) {
    return LastName ? `${firstName} ${LastName}` : firstName;
}
console.log(printName("Alex"));
console.log(printName("Alex", "Johnson"));
// (Medium) Create a 2D array matrix: number[][] representing a 3x3 grid, and write a function printMatrix that logs it row by row.
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
        console.log("Row End", "\n");
    }
}
let _matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
printMatrix(_matrix);
// (Medium) Literal Types: Define a type ThemeMode = "light" | "dark" | "system". Write a function toggleTheme that switches "light" to "dark" and vice versa.
var ThemeMode;
(function (ThemeMode) {
    ThemeMode["theme1"] = "Light";
    ThemeMode["theme2"] = "dark";
    ThemeMode["theme3"] = "system";
})(ThemeMode || (ThemeMode = {}));
let input = prompt("Choose the Theme: theme1, theme2, theme3");
if (input && ThemeMode[input])
    console.log(ThemeMode[input], " Selected");
else
    console.log("Wrong Input");
//===================================================X=======================================X============================================================================================================X=================================
// # HARD #
// (Hard) Create a variable of type any and one of type unknown. Try assigning both to a string variable — explain (in a comment) why one works and the other doesn't.
let var1;
let var2;
var1 = "Ramesh";
var2 = "Suresh";
console.log(`Var1 value: ${var1}, Var2 value: ${var2}`);
// (Hard) Type Narrowing with typeof: Create a function double(value: number | string) that doubles the number or repeats the string twice ("abc" becomes "abcabc").
function doubleVal(value) {
    if (typeof value === "number")
        return value + value;
    else
        return value + value;
}
let ans1 = doubleVal(21);
console.log(ans1);
// (Hard) Union Primitives: Write a function formatID(id: string | number): string that returns an uppercase string if id is a string, or a padded string (e.g., 00042) if id is a number.
function formatId(value) {
    if (typeof value === "string")
        return value;
    else
        return `000${value}`;
}
let newAns = formatId(42);
let newAns1 = formatId("h1222B3c");
console.log(newAns);
console.log(newAns1);
// (Hard) Void vs. Never: Implement two functions: logAlert(msg: string): void that logs to the console, and throwAuthError(msg: string): never that raises a runtime exception.
function logAlert(msg) {
    console.log(msg);
}
function throwAuthError(msg) {
    throw new Error(msg);
}
logAlert("This is a log message.");
try {
    throwAuthError("Authentication failed!");
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=Solutions-Day1.js.map