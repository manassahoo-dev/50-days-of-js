/*
Given a number from 0 to 999,999,999,999, spell out that number in English.
Instructions
Given a number from 0 to 999,999,999,999, spell out that number in English.

Step 1
Handle the basic case of 0 through 99.

If the input to the program is 22, then the output should be 'twenty-two'.

Your program should complain loudly if given a number outside the blessed range.

Some good test cases for this program are:

0
14
50
98
-1
100
Step 2
Implement breaking a number up into chunks of thousands.

So 1234567890 should yield a list like 1, 234, 567, and 890, while the far simpler 1000 should yield just 1 and 0.

The program must also report any values that are out of range.

Step 3
Now handle inserting the appropriate scale word between those chunks.

So 1234567890 should yield '1 billion 234 million 567 thousand 890'

The program must also report any values that are out of range. It's fine to stop at "trillion".

Step 4
Put it all together to get nothing but plain English.

12345 should give twelve thousand three hundred forty-five.

The program must also report any values that are out of range.
*/

const parts = [
  [1e9, 'billion'],
  [1e6, 'million'],
  [1e3, 'thousand'],
  [100, 'hundred'],
  [90, 'ninety'],
  [80, 'eighty'],
  [70, 'seventy'],
  [60, 'sixty'],
  [50, 'fifty'],
  [40, 'forty'],
  [30, 'thirty'],
  [20, 'twenty'],
  [19, 'nineteen'],
  [18, 'eighteen'],
  [17, 'seventeen'],
  [16, 'sixteen'],
  [15, 'fifteen'],
  [14, 'fourteen'],
  [13, 'thirteen'],
  [12, 'twelve'],
  [11, 'eleven'],
  [10, 'ten'],
  [9, 'nine'],
  [8, 'eight'],
  [7, 'seven'],
  [6, 'six'],
  [5, 'five'],
  [4, 'four'],
  [3, 'three'],
  [2, 'two'],
  [1, 'one'],
  [0, 'zero']
]
const floorDiv = (x, y) => Math.floor(x / y)
const say = (n, prefix) => {
  const [part, name] = parts.filter(([part, name]) => part <= n)[0]
  const [high, low] = [floorDiv(n, part), n % part]
  const tailPrefix = part < 100 ? '-' : ' '
  const tail = low > 0 ? say(low, tailPrefix) : ''
  if (part < 100) return `${prefix}${name}${tail}`
  const head = say(high, prefix ? ' ' : '')
  return `${head} ${name}${tail}`
}

const sayNumberInEnglish = (n, prefix='') => {
  if (n < 0 || n >= 1e12) throw 'Number must be between 0 and 999,999,999,999.'
  return say(n, prefix)
}

console.log(`1277834 in english is: ${sayNumberInEnglish(1277834)}`)
