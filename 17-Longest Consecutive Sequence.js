/*
Longest Consecutive Sequence
Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.

Example
Input: [100,4,200,1,3,2]

Output: 4 // LCS [1, 2, 3, 4]

Conceptually this is how it should work.
Copy all the elements of the array in a set. Iterate the array and in each iteration determine if the current element will lead to new subsequence by checking if there is no element less than the current, present in the set. Then find how long this subsequence can be by incrementing the count till there is consecutive elements in the set. In the end return the longest consecutive sequence.
*/

/**
 *
 * @param {number[]} inputArray Array of numbers
 */
const longestConsecutiveSequence = (inputArray) => {
	 //get unique elms  
  const S = new Set(inputArray);
  
  //store the result
  let max = 1;
  
  // iterate array elements
  for (let e of inputArray) {
    
    // if the current element begins a new seq
    if (!S.has(e - 1)) {
      
      // tracks the length of subsequence
      let len = 1;

      // count all the elements of the subsequence
      // e+1, e+2,...
      while (S.has(e + len)) {
        len++;
      }

      // get the max subsequence
      max = Math.max(max, len);
    }
  }

  return max;
}
