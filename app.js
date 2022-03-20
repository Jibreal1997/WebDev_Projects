// Lets say we have two arrays and I would like to know if there is an element in these arrarys that is common to both arrays.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 1];

// function elementSame(arr1,arr2){
//   for(let i = 0; i < arr1.length; i++)
//     for(let j = 0; j < arr2.length; j++)
//       if(arr1[i] === arr2[j])
//         return true;
//   return false;
// }

// console.log(elementSame(array1,array2));
// Now this code has a time complexity of O(a*b) or O(n^2) and a space complexity of O(1) 


// In the second approach we will put the elements of array1 as propoerties of  an object and then we iterate through array2 and check if that property exists.

function elementsSameEfficient(arr1, arr2) {
  let arr1Obj = {};
  for (let i = 0; i < arr1.length; i++) {      // loop to fill obj from array 1
    if(!arr1Obj[arr1[i]]){
      arr1Obj[arr1[i]] = true;
    }
  }

  console.log(arr1Obj);

  for (let j = 0; j < arr2.length; j++) {
    if (arr1Obj[arr2[j]]){
      return true;
  }

  return false;
  }
}

console.log(elementsSameEfficient(array1, array2));
