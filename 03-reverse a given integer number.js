/*
Write a program to reverse a given integer number
The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0
A simple approach to reverse a number could also be to convert it in to a string and then reverse it
*/
const num = 3849;

function reverseGivenInteger(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
