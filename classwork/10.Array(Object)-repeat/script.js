// 1.Filter out Strings from an Array///////////////////////////////////////////////////
// Create a function called 'filterArray(arr)' that takes an array of non-negative integers and strings and return
//  a new array without the strings.
// filterArray([1, 'c', 2, "a", "b"]) // [1, 2]
// filterArray(['4', 1, "a", "b", 0, 15])  //[1, 0, 15]

// function filterArray(arr) {
//     // return arr.filter(el => typeof el === "number") //first way
//     // return arr.filter((item) => item === Number(item)) //second way

//     return arr.filter((item) => Number.isInteger(item))
// }
// console.log(filterArray([1, 'c', 2, "a", "b"]));
// // console.log(filterArray(['4', 1, "a", "b", 0, 15]));



// 2.Summing a Slice////////////////////////////////////////////////////////////////////
// Create a function called 'sliceSum(arr, n)' that has an array and an integer n, return the sum of the first n numbers in the array.

// console.log(sliceSum([9, 8, 7, 6], 2));  //24
// // // sliceSum([1, 3, 2], 2) //4
// // sliceSum([3, 6, 2], 0) //0

// function sliceSum(arr, n){
//     return arr.slice(0,n).reduce((sum,curr)=>sum+curr,0)
// }



// 3.Spelling it Out////////////////////////////////////////////////////////////////////
// Create a function called 'spelling(str)' which takes in a word and spells it out, by consecutively
// adding letters until the full word is completed.
// console.log(findSpell("bee"));// ["b", "be", "bee"]
// console.log(spelling("happy")); //["h", "ha", "hap", "happ", "happy"]

// function findSpell(str) {
//     return str.split("").map((_, i) => str.slice(0, i + 1))
// }

// 4.Hashes and Pluses//////////////////////////////////////////////////////////////////
// Create a function caled "hashPlusCount(str)" that returns the number of hashes and pluses in a string.
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].

// console.log(hashPlusCount("###+")); // [3, 1]
// hashPlusCount("#+++#+#++#") // [4, 6]
// hashPlusCount("") // [0, 0]

// function hashPlusCount(str) {
//     let hashes = 0
//     let pluses = 0
//     str.split``.map((item) => item === '#' ? hashes ++ : pluses++)
//     return [hashes, pluses]
// }

// 5.Reverse the Case////////////////////////////////////////////////////////////////////
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// // reverseCase("MANY THANKS") //"many thanks"

// const reverseCase = (str) => {
//     return str.split``.map((item) => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join``
// }
// console.log(reverseCase("Happy Birthday"));//"hAPPY bIRTHDAY"



//Convert String to Array/////////////////////////////////////////
// let str = 'I am here'
// console.log(str.split``);
// console.log(Array.from(str));
// console.log([...str]);










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Random list of students/////////////////////////////
// const arr = ['Leyla', 'Sevil', 'Mehemmed', 'Raya', 'Senem', 'Gulnara', 'Besti', 'Reshid']
// const arr = ['Zerife', 'Nazim', 'Mezahir', 'Nermin', 'Sebine', 'Yaqut', 'Nabir', 'Raul']

// function randomOrder(students) {
//     let timeLength = 0
//     let max = students.length
//     let interval = setInterval(() => {
//         let randomStudent = students[Math.floor(Math.random() * students.length)]
//         students = students.filter(item => item !== randomStudent)
//         console.log(`${timeLength + 1}.${randomStudent}`);
//         timeLength += 1
//         if (timeLength >= max) {
//             clearInterval(interval)
//             setTimeout(() => {
//                 console.log("it's over");
//             }, 1000)
//         }
//     }, 1000)
// }
// randomOrder(arr)


// 2
// function sliceSum(arr, n) {
//     return arr.slice(0, n).reduce((sum, prev) => sum + prev, 0)
// }



// 3
// / function spelling(str) {
//     //     return str.split('').map((_, index) => str.slice(0, index + 1))
//     // }


// 4
// function hashPlusCount(str) {
//     let hashes = 0;
//     let pluses = 0;
//     [...str].map((item) => item === '#' ? hashes += 1 : pluses += 1)
//     return [hashes, pluses]
// }

// console.log(hashPlusCount("#+++#+#++#"));


//5
// function reverseCase(str) {
//     return str.split``.map((item) => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join``
// }
// console.log(reverseCase("MANY THANKS"));


// let length = [...Array(10).keys()].map(item => -~item)
// console.log(length);


// let arr = ['4', '7', 7, 'Mehemmed', 'Leyla']
// console.log((arr.map(item => Number(item))).filter((item) => !Number.isNaN(item)));



// const arr = [
//     {
//         product: 'Lenova',
//         price: 1900,
//     },
//     {
//         product: 'HP',
//         price: 1300,
//     },
//     {
//         product: 'Acer',
//         price: 1600,
//     },
// ]


// // arr.filter((item) => item.price /= 2)
// // arr.map((item) => item.price /= 2)
// arr.forEach((item) => item.price /= 2)
// console.log(arr);













// const arr = ['7', 'Zerife', 'Faimte', '8', NaN, undefined, 9] //7,8,9
// console.log(arr.map(Number).filter((item) => Number.isInteger(item)));




let a = 8
let b = 9

// function test() {
//     let num = 1;
//     let word =
//         num === 1
//             ? 'one'
//             : num === 2
//                 ? 'two'
//                 : num === 3
//                     ? 'three'
//                     : 'unknown';
//     return word
// }


// function test() {
//     return 7 > 9 ? 'it is true' : 8 > 7 ? 'second true' : 'false'
// }

// console.log(test());


//5  [1,2,3,4,5]


// let arr = [...Array(9).keys()].map(item => -~item)
// let arr2 = [...Array(9).keys()].map(item => item + 1)
// console.log(arr);
// console.log(arr2);

