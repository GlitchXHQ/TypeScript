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