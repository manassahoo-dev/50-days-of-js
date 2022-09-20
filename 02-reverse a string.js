/*
Write a program to reverse a string
String can be reversed by iterating it and storing it in reverse order
String can also be reversed by converting it to array, then joining it after reversing
*/
const str = "JavaScript is awesome"

function reverseAString(str) {
    let reverseStr = '';
    for(let i=str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
