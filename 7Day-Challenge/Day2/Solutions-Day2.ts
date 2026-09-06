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

function move(dir:Direction){

}

// (Easy) Coordinate Tuples: Define a tuple type LatLng = [number, number]. Write a function calculateDistance(pointA: LatLng, pointB: LatLng): number.

// (Easy) Readonly Arrays: Declare a readonly array of allowed HTTP methods (["GET", "POST", "PUT", "DELETE"]). Attempt to run .push() and explain the compiler behavior.

