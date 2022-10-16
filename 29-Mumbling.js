/*
Mumbling
Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

Only alphabets are passed as arguments for the accum(s) funciton

Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
*/
function accum(s) {
  // your code goes below
  return [...s.toUpperCase()].reduce((acc, cur, index) => acc + "-" + cur + cur.toLowerCase().repeat(index))
}
