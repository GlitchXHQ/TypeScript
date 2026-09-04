// (Easy) Declare variables name, age, and isStudent with explicit types (string, number, boolean) and log them.

let Name:String="Peter Parker"
let Age:Number=21
let isStudent:boolean=false

console.log("Name: ",Name," Age: ",Age," isStudent: ",isStudent)

//===================================================X=======================================X============================================================================================================X=================================

// (Easy) Create an array scores that can only hold numbers. Try pushing a string into it and see the error TS gives you.

let arrayScores:Number[]=[1,2,3,4,5]
//arrayScores.push("Hello")
arrayScores.push(21)
console.log("Array Scores: ",arrayScores)
console.log("Gives Error: Argument of type 'string' is not assignable to parameter of type 'Number'")

//===================================================X=======================================X============================================================================================================X=================================

// (Easy) Create a tuple person that holds exactly [string, number] (name, age). Try adding a third element and observe the error.

let tuple1:[String,Number]=["Ramesh",21]
console.log(tuple1)

// (Easy) Write a function greet(name: string): string that returns "Hello, <name>!".

function greet(Name:String){
    return `Hello, ${Name}!`
}

let output:String=greet("Alex")
console.log(output)

//===================================================X=======================================X============================================================================================================X=================================

// # MEDIUM #

// (Medium) Write a function add(a: number, b: number): number. 

function add(a:number,b:number):number{
    return a+b
}   

let ans:number=add(2,3)
console.log("Addition: ",ans)

// (Medium) Strict Math Functions: Write a typed function calculateTax(price: number, taxRate: number = 0.18): number that handles default tax rates and rejects invalid numeric values.

function calculateTax(price:number, taxRate:number=0.18){
    return price*taxRate;
}

let tax:number=calculateTax(100)
let taxNew:number=calculateTax(100,20)
console.log("Tax: ",tax)
console.log("Tax (New): ",taxNew)

// (Medium) Optional Parameters: Create a function formatName(firstName: string, lastName?: string): string that returns "First Last" if lastName exists, or just "First".

function printName(firstName:string, LastName?:string):string{
    return LastName ? `${firstName} ${LastName}`: firstName
}
console.log(printName("Alex"))
console.log(printName("Alex", "Johnson"))

// (Medium) Create a 2D array matrix: number[][] representing a 3x3 grid, and write a function printMatrix that logs it row by row.

function printMatrix(matrix:number[][]):void{

    for(let i=0;i<matrix.length;i++){
        console.log(matrix[i])
        console.log("Row End", "\n");
    }
}

let _matrix:number[][]=[[1,2,3],[4,5,6],[7,8,9]]
printMatrix(_matrix)

// (Medium) Literal Types: Define a type ThemeMode = "light" | "dark" | "system". Write a function toggleTheme that switches "light" to "dark" and vice versa.

enum ThemeMode{
    theme1='Light',
    theme2='dark',
    theme3='system'
}

let input:string|null=prompt("Choose the Theme: theme1, theme2, theme3")

if(input && ThemeMode [input as keyof typeof ThemeMode])
console.log(ThemeMode[input as keyof typeof ThemeMode]," Selected")
else
console.log("Wrong Input")


//===================================================X=======================================X============================================================================================================X=================================

// # HARD #

// (Hard) Create a variable of type any and one of type unknown. Try assigning both to a string variable — explain (in a comment) why one works and the other doesn't.

let var1:any
let var2:unknown

var1="Ramesh"
var2="Suresh"
console.log(`Var1 value: ${var1}, Var2 value: ${var2}`)

// (Hard) Type Narrowing with typeof: Create a function double(value: number | string) that doubles the number or repeats the string twice ("abc" becomes "abcabc").

function doubleVal(value:number|string):number|string{
    if(typeof value === "number")
        return value+value
    else 
        return value+value
}

let ans1 = doubleVal(21)
console.log(ans1)

// (Hard) Union Primitives: Write a function formatID(id: string | number): string that returns an uppercase string if id is a string, or a padded string (e.g., 00042) if id is a number.

function formatId(value:number|string):string{    
    if(typeof value === "string")
        return value
    else 
        return `000${value}`
}

let newAns = formatId(42)
let newAns1 = formatId("h1222B3c")
console.log(newAns)
console.log(newAns1)

// (Hard) Void vs. Never: Implement two functions: logAlert(msg: string): void that logs to the console, and throwAuthError(msg: string): never that raises a runtime exception.

function logAlert(msg:string):void{
    console.log(msg)
}

function throwAuthError(msg:string):never{
    throw new Error(msg)
}

logAlert("This is a log message.")
try{
    throwAuthError("Authentication failed!")
}
catch(e){
    console.log(e)
}