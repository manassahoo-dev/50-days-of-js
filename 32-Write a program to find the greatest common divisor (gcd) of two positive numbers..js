/*
Write a program to find the greatest common divisor (gcd) of two positive numbers.
The greatest common divisor (GCD), also called the greatest common factor, of two numbers is the largest number that divides them both. 
For instance, the greatest common factor of 20 and 15 is 5, since 5 divides both 20 and 15 and no larger number has this property.
*/
const gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
