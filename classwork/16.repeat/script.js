// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]

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
const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51]
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]

// const sortArr = (array) => {
//     for (let i = 1; i < array.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (array[i] > array[j]) {
//                 let x = array[i]
//                 array[i] = array[j]
//                 array[j] = x
//             }
//         }

//     }
//     return array
// }

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
// // const arrNum = [0, 1, 22, 3, 12, 11, 9, 8, 10, 14, 41, 55, 51]

// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]








// 8. Sort 'arrLetters' ascending
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']



// 9.Flat 'arr9'
// const arr9 = [[1, 2], [3, 4, 5], [[6, 7, 8, 9]]]
// const flatArr = (myArr) => {
//     let newArr = []
//     for (let i = 0; i < myArr.length; i++) {
//         for (let j = 0; j < myArr[i].length; j++) {
//             newArr.push(myArr[i][j])
//         }
//     }
//     return newArr
// }
// let newArr=[]
// let flatArr=(arr)=>{
//     for(let a of arr){
//         Array.isArray(a) ? flatArr(a):newArr.push(a)
//     }
//     return newArr
// }

// console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]


//Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// If the input tries to divide by 0, return: "Can't divide by 0!"


// function calculator(num1, operator, num2) {
//     const operations = {
//         "+": (a,b) => a + b,
//         "-": (a,b) => a - b,
//         "*": (a,b) => a * b,
//         "/": (a,b) => a / b,
//     }
//     if (num2===0 && operator === "/") {
//         return  "Can't divide by 0!"
//     } else {
//         return operations[operator](num1, num2)
//     }
// }
// function calculator(num1, operator, num2) {
//     const operations = {
//         "+": (a,b) => a + b,
//         "-": (a,b) => a - b,
//         "*": (a,b) => a * b,
//         "/": (a,b) => (b===0 ? "Can't divide by 0!" : a / b),
//     }
//     return operations[operator](num1, num2)
// }

// function calculator(num1, operator, num2) {
//     const operations = {
//         "+": () => num1 + num2,
//         "-": () => num1 - num2,
//         "*": () => num1 * num2,
//         "/": () => (num2 ? num1 / num2 : "Can't divide by 0!"),
//     }
//     return operations[operator]()
// }

// console.log(calculator(2, "+", 2));  // 4
// console.log(calculator(2, "*", 2));  // 4
// console.log(calculator(4, "/", 2));  // 2
// console.log(calculator(2, "/", 0));


















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


//3.Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// If the input tries to divide by 0, return: "Can't divide by 0!"



// function calculator(num1, operator, num2) {
//     // if (operator === '/' && num2 === 0) {
//     //     return "Can't divide by 0!"
//     // }
//     const oper = {
//         "+": () => num1 + num2,
//         "-": () => num1 - num2,
//         "*": () => num1 * num2,
//         "/": () => num2 ? num1 / num2 : "Can't divide by 0!",
//     }
//     return oper[operator]()

// }

// console.log(calculator(2, "+", 2));  // 4
// // console.log(calculator(2, "*", 2));  // 4
// console.log(calculator(4, "/", 2));  // 2
// console.log(calculator(2, "/", 0));



// if (!Boolean(item))
//     if (!item)
//         if (item === false)


//             if (Boolean(item))
//                 if (item === true)
//                     if (!!item)


//                         !!!!item === Boolean(item)


// let a = 9
// let b = 8
// let [first, second] = [a, b]

// let arr2 = ['Fatime', 'Nermin']
// let [first, second] = ['Fatime', 'Nermin']
// console.log([second, first]);



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