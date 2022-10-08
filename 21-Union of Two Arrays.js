/*
Union of Two Arrays
Write the code for the function which returns the the union of the two given arrays
*/
const unionOfArrays = (arr1, arr2) => {
  // code below here
  dup_arr = [...arr1]
  arr2.forEach((val) => {
    if (dup_arr.includes(val) === false) {
      dup_arr.push(val)
    }
  })
  return dup_arr;
};
