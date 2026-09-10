// Easy
//================================x=================================x=======================================x=================================================x=====================


// (Easy) Create an interface User with id: number, name: string, and email: string. Write a function that takes a User and prints a welcome message.
interface User{
    id:number,
    name:string,
    email:string
}

function welcomeUser(user:User):void{
    console.log(`Welcome ${user.name}! Your email is ${user.email} and your ID is ${user.id}.`);
}

welcomeUser({id:1, name:"John Doe", email:"John.Doe@example.com"})

// (Easy) Create a type Point = { x: number; y: number } and write a function distance(p1: Point, p2: Point): number that calculates distance between two points.

interface Point{
    x:number,
    y:number
}

function calcDistance(points:Point):void{
    console.log(`The distance between two points is ${Math.abs(points.x - points.y)}`)
}

calcDistance({x:10, y:20})

// (Easy) Create an enum Direction with Up, Down, Left, Right. Write a function move(dir: Direction) that logs which direction was chosen.

enum Direction{
    Up="⬆️",
    Down="⬇️ ",
    Left="⬅️",
    Right="➡️"
}

function move(dir: Direction) {
  if (Object.values(Direction).includes(dir)) {
    console.log(`You moved ${dir}`);
  } else {
    console.log(`Invalid direction`);
  }
}

move(Direction.Up)
move(Direction.Left)
move(Direction.Right)
move(Direction.Down)

// (Easy) Coordinate Tuples: Define a tuple type LatLng = [number, number]. Write a function calculateDistance(pointA: LatLng, pointB: LatLng): number.

type LatLng = [number, number];

function calculateDistance(pointA: LatLng, pointB: LatLng): number {
    const [lat1, lng1] = pointA;
    const [lat2, lng2] = pointB;
    
    return Math.hypot(lat2 - lat1, lng2 - lng1);
}   

const nyc:LatLng=[40.7128, -74.0060]
const philadelphia: LatLng = [39.9526, -75.1652]

console.log(calculateDistance(nyc, philadelphia));

// (Easy) Readonly Arrays: Declare a readonly array of allowed HTTP methods (["GET", "POST", "PUT", "DELETE"]). Attempt to run .push() and explain the compiler behavior.

const HttpMethods: readonly string []=["GET", "POST", "PUT", "DELETE"]

HttpMethods.map(item=>console.log(item))


// Medium
//========================================x=============================================x=============================================================x=============================

// (Medium) Add an optional property phone?: string to the User interface from Q1. Write a function that only prints the phone if it exists.

interface User{
    id:number,
    name:string,
    email:string,
    phone?:string
}

function printDetails(user:User){
    console.log(`Your Joining Id: ${user.id} \n Your Name: ${user.name} \n Your Email: ${user.email} \n  ${user.phone? `Your Phone : ${user.phone}`: ``}`)
}

printDetails({id: 1,name:"Vivek Chauhan",email:"er.vivekchauhan1@gmail.com"})
printDetails({id: 2,name:"Ruchi Mishra",email:"ruchiMishra@gmail.com",phone:"9181919911"})

// (Medium) Create a union type type Status = "success" | "error" | "loading" and write a function handleStatus(status: Status) that returns a different message per status.

type Status = "success" | "error" | "loading"

function handleStatus(status:Status):string{
    switch(status){
    case "success":
        return "Operation completed successfully!";
    case "error":
        return "Error Occured!";
    case "loading":
        return "Operation loading!";
    default:
        const _exhaustiveCheck:never=status
        return _exhaustiveCheck
}
}

handleStatus("success")
handleStatus("error")
handleStatus("loading")

// (Medium) Create an intersection type combining { name: string } and { age: number } into Person. Create an object using it.

type Person ={name:string} & {age:number}

const user:Person = {
    name:"Alex",
    age:21
}

console.log(user.name)
console.log(user.age)

// (Medium) Labeled Tuples: Create a labeled tuple type ApiResponse = [statusCode: number, message: string, success: boolean]. Write a validator function returning this tuple.

type ApiResponse = [statusCode: number, message: string, success: boolean];

function validator(api: unknown): api is ApiResponse {
  
    if (!Array.isArray(api) || api.length !== 3) {
    return false;
  }

  const [statusCode, message, success] = api;

  if (typeof statusCode !== "number") {
    return false;
  }
  if (typeof message !== "string") {
    return false;
  }
  if (typeof success !== "boolean") {
    return false;
  }

  return true;
}
// (Medium) Matrix Typing: Define a 2D coordinate grid type Matrix2D representing a grid of numbers (number[][]) and write a function to calculate the diagonal sum.

type matrix2D = number[][]

function getDiagonalSum(matrix:matrix2D):void
{
    let n=matrix.length
    let sum=0
    
    for(let i=0;i<n;i++){
        if(matrix[i] && matrix[i][i]!==undefined)
            sum+=matrix[i][i]
    }

    console.log(`Sum of the Diagonal is: ${sum}`)
}

const grid:matrix2D=[[1,2,3],[4,5,6],[7,8,9]]
getDiagonalSum(grid)

// (Medium) Numeric Enums: Define an enum OrderStatus { Pending, Processing, Shipped, Delivered, Cancelled }. Write a function checking if the status is cancellable (only Pending and Processing).

enum OrderStatus{
    Pending,
    Processing,
    Shipped,
    Delivered,
    Cancelled
}

function isCancellable(status:OrderStatus):boolean{
    return status===OrderStatus.Pending || status===OrderStatus.Processing
}

const currentOrder = OrderStatus.Pending;

if (isCancellable(currentOrder)) {
  console.log("Order can be cancelled");
} else {
  console.log("Order cannot be cancelled");
}

console.log(isCancellable(OrderStatus.Shipped));

// (Medium) String Enums: Define a string enum UserRole { Admin = "ADMIN", Editor = "EDITOR", Viewer = "VIEWER" }. Write a role authorization guard function.

enum UserRole{
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

function Authentication(user:string):void{
    if(user && UserRole[user as keyof typeof UserRole])
    console.log(UserRole[user as keyof typeof UserRole] + " Permitted")
    else
    console.log("Unauthorized")
}

Authentication("Admin")
Authentication("Clerk")

// Hard
//========================================x=============================================x=============================================================x=============================

// (Hard) Extend the User interface into Admin (add role: "admin" and permissions: string[]). Write a function logAccess(user: User | Admin) that uses a type guard ("role" in user) to check if it's an Admin before printing permissions.

interface User{
    name:string,
    age:number,
    email:string
}

interface Admin extends User {
    role:'admin',
    permissions:string[]
}

function logAccess(user: User | Admin): void{
  if ("role" in user) {
    // TypeScript narrows `user` to Admin within this block
    console.log(`Admin ${user.name} has permissions: ${user.permissions.join(", ")}`);
  } else {
    // TypeScript narrows `user` to User
    console.log(`User ${user.name} does not have admin permissions.`);
  }
}

const user:User={
    name:"John Doe",
    age:30,
    email:"johnDoe@gmail.com"
}

const admin:Admin={
    name:"Jane Smith",
    age:35,
    email:"janeSmith@gmail.com",
    role:"admin",
    permissions:["read", "write", "delete"]
}

logAccess(user);  // Output: User John Doe does not have admin permissions.
logAccess(admin); // Output: Admin Jane Smith has permissions: read, write, delete.

// (Hard) Enum vs. Const Object: Convert the UserRole enum into a const assertion object (const ROLES = { ... } as const;) and extract its type using keyof and typeof.

const ROLES = {
  ADMIN: "admin",
  USER: "user",
  EDITOR: "editor"
} as const;

type UserRoleType = keyof typeof ROLES

function checkRole(role: UserRoleType): void {
  if (role in ROLES) {
    console.log(`Role ${role} is valid.`);
  } else {
    console.log(`Role ${role} is invalid.`);
  }
}

checkRole("ADMIN"); // Output: Role ADMIN is valid.
checkRole("EDITOR"); // Output: Role EDITOR is valid.
checkRole("USER"); // Output: Role MANAGER is invalid.