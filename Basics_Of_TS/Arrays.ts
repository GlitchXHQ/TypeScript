// Task: Fix the type error in the following code without using any:
//let scores: number[] = [90, 85, 100];

// How do you allow this array to hold both numbers AND strings?
//scores.push("Pass");

//Ans: 
let scoresA:(number | string )[]=[90,85,100]
scoresA.push("Hello")
console.log(scoresA)


/* 
Task: Define a function filterHighScores that takes an array of game scores (numbers) and a threshold (number).

Explicitly type the input array.

Return a new array containing only scores greater than or equal to the threshold.
*/

function isPassed(scores:number[],threshold:number): number []{
    return scores.filter(score=>score>=threshold)
}

let scores=[60,55,90,85,40,81,79,67,69]
let ans= isPassed(scores,70)
console.log(ans)

/*
Task: Express a 2D coordinate system using a TypeScript Tuple.
*/

type point2d=[x:number,y:number]
const position:point2d=[10,20]
console.log("X: ",position[0]," Y: ",position[1])

/*
Task: Define a type alias HTTPResponse that represents a tuple of [number, string] (e.g., [200, "OK"] or [404, "Not Found"]).
Write a function handleResponse that accepts this tuple, destructures it safely, and logs a message.
*/

type statusCodes=[code:number,message:string]
const success:statusCodes=[200,"OK"]
const notFound:statusCodes=[404,"Not Found"]

function handleResponse(response:statusCodes):void{
    const [code,message]=response
    console.log(`Response Code: ${code}, Message: ${message}`)
}

handleResponse(success)
handleResponse(notFound)

