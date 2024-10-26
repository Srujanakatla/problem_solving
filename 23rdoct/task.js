// 42. *Check if All Elements are Unique*
// - Task: Check if all elements in an array are unique.
//            59. *Find the Missing Number in an Array*
// - Task: Find the missing number in an array containing numbers from 1 to N.
//       70. *Find the Longest Word in a Array*
// - Task: Find the longest word in a given array.



function areAllElementsUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false; 
        }
      }
    }
    return true; 
  }
  
 
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 2, 4, 5];
  console.log(areAllElementsUnique(array1)); 
  console.log(areAllElementsUnique(array2)); 

  
  function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2; 
    let actualSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
    }
  
    return expectedSum - actualSum; 
  }
  
 
  const array3 = [1, 2, 4, 5, 6]; 
  console.log(findMissingNumber(array3, 6)); 

  
  function findLongestWord(arr) {
    let longestWord = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
  
    return longestWord;
  }
  
  const words = ["apple", "banana", "strawberry", "kiwi"];
  console.log(findLongestWord(words)); 