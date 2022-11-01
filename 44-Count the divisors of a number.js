/*
Count the divisors of a number
Count the number of divisors of a positive integer n.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/
function getDivisorsCnt (num) {
   if (num === 1) return num
      let divArr = [[2, 0]]
      let div = divArr[0][0]
   while (num > 1) {
      if (num % div === 0) {
         for (let i = 0; divArr.length; i++) {
            if (divArr[i][0] === div) {
               divArr[i][1] += 1
               break
            } else {
               if (i === divArr.length - 1) {
                  divArr.push([div, 1])
                  break
               }
            }
         }
         num /= div
      } else {
         div += 1
      }
   }
   for (let i = 0; i < divArr.length; i++) {
      num *= divArr[i][1] + 1
   }
   return num
}
