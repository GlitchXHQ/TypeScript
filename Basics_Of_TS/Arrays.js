"use strict";
// Task: Fix the type error in the following code without using any:
//let scores: number[] = [90, 85, 100];
Object.defineProperty(exports, "__esModule", { value: true });
// How do you allow this array to hold both numbers AND strings?
//scores.push("Pass");
//Ans: 
let scoresA = [90, 85, 100];
scoresA.push("Hello");
console.log(scoresA);
/*
Task: Define a function filterHighScores that takes an array of game scores (numbers) and a threshold (number).

Explicitly type the input array.

Return a new array containing only scores greater than or equal to the threshold.
*/
function isPassed(scores, threshold) {
    return scores.filter(score => score >= threshold);
}
let scores = [60, 55, 90, 85, 40, 81, 79, 67, 69];
let ans = isPassed(scores, 70);
console.log(ans);
const position = [10, 20];
console.log("X: ", position[0], " Y: ", position[1]);
const success = [200, "OK"];
const notFound = [404, "Not Found"];
function handleResponse(response) {
    const [code, message] = response;
    console.log(`Response Code: ${code}, Message: ${message}`);
}
handleResponse(success);
handleResponse(notFound);
//# sourceMappingURL=Arrays.js.map