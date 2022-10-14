/*
Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels

The input can consit of Lower case and upper case letters so make sure to count both of them.
*/
function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  str = str.toLowerCase();
  for (char of str) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"));
