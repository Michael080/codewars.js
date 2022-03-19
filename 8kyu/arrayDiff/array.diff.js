/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  const diff = [];

  function findVal (arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  }

  function storeDiffs(a, b, elem, diff) {
    !findVal(b, elem) ?
      diff.push(elem) :
      false;
  }

  a.forEach(elem => {
    storeDiffs(a, b, elem, diff);
  });

 return diff;
}

// codewars => Time: 755ms | Passed: 41 | Failed: 0