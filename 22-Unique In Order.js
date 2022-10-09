/*
Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
The argument can contain a string or an array
For example: uniqueInOrder([1,2,2,3,3]) should return [1,2,3]
uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']
*/
let uniqueInOrder = (iterable) => {
  return [...iterable].filter((a, i) => a !== iterable[i-1])
};
