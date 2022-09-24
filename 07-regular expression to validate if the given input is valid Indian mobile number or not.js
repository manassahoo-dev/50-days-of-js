/*
Create a regular expression to validate if the given input is valid Indian mobile number or not
Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
test method of regular expression can be used to validate if the mobile number pattern matches or not
*/
const number = '+919876543210';

function validateMobile(number) {
    const regexMobile = /^(\+91|0)?\s?\d{10}$/;
    return regexMobile.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
