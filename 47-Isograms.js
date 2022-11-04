/*
Isograms
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
Note : An empty string is also an isogram
*/
function isIsogram(str){
  //...
  if (str.isEmpty) {
    return true;
  } else {
    // All lower case.
    str = str.toLowerCase();
  }
  //split string into individual characters. 
  var array = str.split('');
  var sortedArr = array.slice().sort();

  for (var i = 0; i < array.length; i++) {
    //if duplicate is found return false.
    if (sortedArr[i + 1] == sortedArr[i]) {
      return false;
    }
  }
  //else return true
  return true;
}
