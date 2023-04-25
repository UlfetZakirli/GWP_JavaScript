// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]

// 1.1 Splice 'arr' //  [7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]

// console.log(arr.splice(1, arr.length - 2));
// 1.2 Show only last three values of 'arr' // [ false, 1, null]
// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// 1.4 Find second 7's index. //4
// 1.5 Filter only true values of 'arr' // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// 1.6 Sum only integer values of 'arr' //22

// const result = arr.reduce((sum, prev) => Number.isInteger(prev) ? sum + prev : sum, 0)
// const result = arr.reduce((sum, prev) => typeof (prev) === 'number' ? sum + prev : sum, 0)
// console.log(result);

// 1.7 Find falsy values' length //4

// // const result = arr.filter(Boolean)
// const result = arr.filter((el) => !el)
// console.log(result);


// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.

// console.log(findSmallest({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
// })); // 10

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0

// function findSmallest(inks) {
//     // return Math.min(...Object.values(inks))
//     // return Math.min.apply(null, Object.values(inks))
// }


// 2.2 Create a function called maxNums that find out max num of each arr
//  console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]
// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]


// function maxNums(arr) {
//     //    return arr.map((el)=>Math.max(...el))
//     return arr.map((el) => Math.max.apply(null, el))

// }

// console.log([5, 3].map((_, index) => index));
// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.

// console.log(findLetterIndex("hello", "l")); // [2,3]
// // console.log(findLetterIndex("happy", "h")); //[0, 0]

// function findLetterIndex(text,letter) {


//     return [text.indexOf(letter),text.lastIndexOf(letter)]
// }


// 2.4 Create a function called checkNum(arr, n) that takes an array of numbers arr and a number n.
//  Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
// const checkNum =(arr,n)=>{
//     return arr.some(item=> arr.some(el => item+el===n))
//  }

// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
// console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
// console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// function checkNum(arr, n) {
//     // return arr.some((item) => arr.some((item2) => (item + item2) === n))
//     // return arr.some((item) => arr.includes(n - item))
// }

// console.log(checkNum([10, 12, 4, 7, 9, 11], 16));


// const arr = ['ulfat', '9', 5, false, 0, undefined, null]

// //not falsy
// console.log(arr.filter((item) => item));

// //falsy
// console.log(arr.filter((item) => !item));


// const obj = {
//     name: 'Besti',
//     uni: 'GDU'
// }


// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));


// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// function insertWhitespace(params) {
    
// }

