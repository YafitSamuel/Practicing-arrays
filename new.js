const array = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

function arrAdder(array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const ltr = array[j][i];
      str += ltr;
    }
    str += " ";
  }
  console.log(str);
  return str;
}
console.log(arrAdder(array));

//2 ---------------------------------------------------------------
// ("wonderful", "people", "e")  ==>  "wondeople"

function stringMerge(string1, string2, letter) {
  return (
    string1.slice(0, string1.indexOf(letter)) +
    string2.slice(string2.indexOf(letter))
  );
}
console.log(stringMerge("wonderful", "people", "e"));

//3 ---------------------------------------------------------------
function inArray(arr1, arr2) {
  let result = [];
  let newResult = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i].includes(arr1[j])) {
        result.push(arr1[j]);
      }
    }
  }
  console.log(result);

  for (let a = 0; a < result.length; a++) {
    if (result[a] != result[a + 1]) {
      newResult.push(result[a]);
    }
  }
  console.log(newResult);
  return newResult.sort();
  // console.log(newResult.sort());
}
inArray(
  ["arp", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);

//4 ---------------------------------------------------------------
// Your goal in this kata is to implement a difference function, which subtracts one
//  list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
let newArray = [];

function arrayDiff(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      if (firstArr[i] === secondArr[j]) {
        firstArr.splice(i, 1);
      }
    }
    console.log(firstArr);
    return firstArr;
  }
}
arrayDiff([1, 2, 3], [1, 2]);

//5---------------------------------------------------------------
// As a part of this Kata, you need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.

let middle;
function gimme(triplet) {
  let max = Math.max(...triplet);
  let min = Math.min(...triplet);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] < max && triplet[i] > min) {
      middle = i;
    }
  }
  console.log(middle);
  return middle;
}
gimme([1, 2, 3]);

//6 ---------------------------------------------------------------
// Given a two dimensional array, return the co-ordinates of 'x'.
// If 'x' is not inside the array, or if 'x' appears multiple times, return []
// The co-ordinates should be zero indexed.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (input) => {
  let coords = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("x")) {
      coords.push([i, input[i].indexOf("x")]);
    }
  }
  console.log(coords);
  if (coords.length === 1) {
    return coords[0];
  } else {
    return [];
  }
};

//7 ---------------------------------------------------------------
// There is an array of strings. All strings contains similar letters except one. Try to find it!

function findUniq(arr) {
 
}
