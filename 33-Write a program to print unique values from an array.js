/*
Write a program to print unique values from an array
Input
const arrOfNum = [1, 2, 2, 4, 5, 6, 6]
Output
[1, 2, 4, 5, 6]
*/
function set(arrOfNum) {
  return [...new Set(arrOfNum)]
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));
