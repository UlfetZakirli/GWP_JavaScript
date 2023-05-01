// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
// const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

//1.Show only falsy values in 'arr'
// console.log(falsyValue(arr)); //[NaN, false, undefined]

// 2.Show only string values
// console.log(stringValues(arr)); //['6', '0', 'true', 'a']

// 3.Slice array from index 3 to 7(includes both indexs)
// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// 4.Sum only number values
// console.log(sumArr(arr)); //32

// 5.Find last 8's index in 'arr'
// console.log(findLastIndex(arr)); //11

// 6.Reverse 'arr'
// console.log(reverseArr(arr));  // [true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']

// 7. Sort 'arrNum' ascending

// const sortArr = (array) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] > array[i + 1]) {
//                 sorting = true
//                 let a = array[i]
//                 array[i] = array[i + 1]
//                 array[i + 1] = a
//             }
//         }
//     }return array
// }




// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51]
// const sortArr = (anyArr) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < anyArr.length; i++) {
//             if (anyArr[i] < anyArr[i + 1]) {
//                 sorting = true
//                 let num = anyArr[i]
//                 anyArr[i] = anyArr[i + 1]
//                 anyArr[i + 1] = num
//             }
//         }
//     }
//     return anyArr
// }


// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]


// 8. Sort 'arrLetters' ascending
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// 9.Flat 'arr9'
// const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9], 10]

// function flatArr(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!Array.isArray(arr[i])) {
//             newArr.push(arr[i])
//         }
        
//         for (let a = 0; a < arr[i].length; a++) {
//             newArr.push(arr[i][a])

//         }
//     }
//     return newArr
// }

// console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]









//Algorithm

// 1.Given a number, return an array containing the two halves of the number.If the number is odd, make the rightmost number higher.

// function numberSplit(n) {

// }

// console.log(numberSplit(4));   //[2,2]
// console.log(numberSplit(11));  //[5,6]
// console.log(numberSplit(-9));  //[-5,-4]


// 2.Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.
// function reorderDigits(arr, direction) {

// }

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));    // [155, 134, 89, 44, 112]
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));   //[551, 431, 98, 44, 211]






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

//1.Show only falsy values in 'arr'///////////////////////////////////////////////////////////////////////////////////
// const falsyValue = (myArr) => {
//     let newArr = []
//     for (let i = 0; i < myArr.length; i++) {
//         if (!myArr[i]) {
//             newArr.push(myArr[i])
//         }
//     }
//     return newArr
// }
// console.log(falsyValue(arr));

// 2.Show only string values///////////////////////////////////////////////////////////////////////////////////////////
// const stringValues = (myArr) => {
//     const newArr = []
//     for (let i = 0; i < myArr.length; i++) {
//         if (typeof myArr[i] === 'string') {
//             newArr.push(myArr[i])
//         }
//     }
//     return newArr
// }

// console.log(stringValues(arr));


// 3.Slice array from index 3 to 7 (includes both indexs).//////////////////////////////////////////////////////////////

// const sliceArr = (myArr) => {
//     const newArr = []
//     for (let i = 3; i < 8; i++) {
//         newArr.push(myArr[i])
//     }
//     return newArr
// }

// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// 4.Sum only number values////////////////////////////////////////////////////////////////////////////////////////////

// const sumArr = (myArr) => {
//     let sum = 0
//     for (let i = 0; i < myArr.length; i++) {
//         if (typeof myArr[i] === 'number' && myArr[i]) {
//             sum += myArr[i]
//         }
//     }
//     return sum
// }

// console.log(sumArr(arr)); //32


//5.Find last 8's index in 'arr' /////////////////////////////////////////////////////////////////////////////////////

// const findLastIndex = (myArr) => {
//     for (let i = myArr.length; i >= 0; i--) {
//         if (myArr[i] === 8) {
//             return i
//         }
//     }
// }

// console.log(findLastIndex(arr)); //11

// 6.Reverse 'arr'////////////////////////////////////////////////////////////////////////////////////////////////////

// const reverseArr = (myArr) => {
//     let newArr = []
//     for (let i = myArr.length - 1; i >= 0; i--) {
//         newArr.push(myArr[i])
//     }
//     return newArr
// }

// console.log(reverseArr(arr));  // [true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']


// 7. Sort 'arrNum' ascending.//////////////////////////////////////////////////////////////////////////////////////////
// const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]

// const sortArr = (myArr) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < myArr.length; i++) {
//             if (myArr[i] > myArr[i + 1]) {
//                 sorting = true
//                 let num = myArr[i]
//                 myArr[i] = myArr[i + 1]
//                 myArr[i + 1] = num
//             }
//         }
//     }
//     return myArr
// }
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]


// 8. Sort 'arrLetters' ascending//////////////////////////////////////////////////////////////////////////////////////////
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']

// const sortLetters = (myArr) => {
//     let sorting = true
//     while (sorting) {
//         sorting = false
//         for (let i = 0; i < myArr.length; i++) {
//             if (myArr[i] > myArr[i + 1]) {
//                 sorting = true
//                 let letter = myArr[i]
//                 myArr[i] = myArr[i + 1]
//                 myArr[i + 1] = letter
//             }
//         }
//     }
//     return myArr
// }

// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']


// 9.Flat 'arr9'/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]

// const flatArr = (myArr) => {
//     const newArr = []
//     console.log(myArr.length);
//     for (let i = 0; i < myArr.length; i++) {
//         for (let j = 0; j < myArr[i].length; j++) {
//             newArr.push(myArr[i][j])
//         }
//     }
//     return newArr
// }

// console.log(flatArr(arr9));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
