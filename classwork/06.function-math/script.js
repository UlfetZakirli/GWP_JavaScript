// 1.Create a function called "getRandomLetter()" which is to find out a random letter in "arr1" (used: parameter).
// const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'y', 'u']

// 2.Create a function called 'calcSum()' which is to sum even numbers in 'arr2' array (used: for...of loop).
// const arr2 = [1, 2, 3, 4, 14, 5, 6, 8]

// 3.Create a function called 'getPositiveNam()' which is to make all 'arr3' numbers positive.(used: Function expression).
// const arr3 = [-3, -5, -9, 3, 0, true, false, -22]

// 4.Create a function called 'calcSquareRoot()' which is to take square root of each number 'arr4' array (used: Arrow function).
// if the square root is not an integer number, make it integer number.
// const arr4 = [4, 9, 16, 20, 24, 43, 81, 100]

// 5.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
// (used: for...of).
// const arr5 = [
//     {
//         name: 'my name',
//         surname: 'my surname',
//         city: 'my city'
//     },
//     {
//         name: 'my name',
//         surname: 'my surname',
//         city: 'my city'
//     },
//     {
//         name: 'my name',
//         surname: 'my surname',
//         city: 'my city'
//     }
// ]

// function fillInfo(){
//    for(let value of arr5){
//     value.name="Minaya",
//     value.surname="Aliyeva",
//     value.city="Shamkir"

//    }
//    return arr5

// }
// console.log(fillInfo());



// 6.Find the Smallest and Biggest Numbers
// Create a function that called "minMax" takes an array of numbers and return both the minimum and maximum numbers, in that order.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]















//////////////////////////////// Function declaration
// function calcSum() {
//     return 8 + 4
// }
// console.log(calcSum());


//////////////////////////////// Function Expression
// const calcSum = function () {
//     return 7 + 6
// }
// console.log(calcSum());




//////////////////////////////// Arrow function

// const arr1 = ['A', 'B', 'C', 'D']
// const arr2 = ['Minaye', 'Sebine', 'Nabir']
// const arr3 = ['true', 'false']
// let sum = 0
// function calcSum() {
//     for (let num of arr1) {
//         sum += num
//     }
//     return sum
// }


// console.log(calcSum());




// console.log(getRandomNum(arr1));
// console.log(getRandomNum(arr2));
// console.log(getRandomNum(arr3));






// function getRandomNum(anyArray) {
//     return anyArray[Math.floor(Math.random() * anyArray.length)]
// }


























//////////////////////////////// function declaration
// function calcSum() {
//     return 6 + 4

// }

// console.log(calcSum());



////////////////////////////////// function expression
// let calcSum = function () {

//     return 6 + 4
// }

// console.log(calcSum());

//////////////////////////////////// Arrow function

// const calcSum = () => (
//     3 + 2
// )

// console.log(calcSum());


// {}/return === ()

// const arr2 = [2, 4, 5]
// const arr1 = [1, 2, 3]
// let result = []

// function calcPow(anyArray) {
//     for (let i = 0; i < anyArray.length; i++) {
//         result.push(Math.pow(anyArray[i], 2))
//     }
//     return result
// }


// console.log(calcPow(arr1));
// result.length = 0
// console.log(calcPow(arr2));


// let randomNum = ['a', 'b', 'c']
// let randomNum2 = ['1', '2', '3']
// let randomNum3 = ['Mehemmed', 'Leyla', 'Ulfat']
// let randomNum4 = ['Sebine', 'Sehane', 'Ulfat']

// function calcRandom(Leyla) {
//     return Leyla[Math.floor(Math.random() * Leyla.length)]
// }


// console.log(calcRandom(randomNum));
// console.log(calcRandom(randomNum2));
// console.log(calcRandom(randomNum3));
// console.log(calcRandom(randomNum4));


















/////////////////1
// function getRandomLetter(letters) {
//     return letters[Math.floor(Math.random() * letters.length)]
// }

// console.log(getRandomLetter(arr1));



/////////////////2
// let sum = 0
// function calcSum(num) {
//     for (let item of num) {
//         if (!(item % 2)) {
//             sum += item
//         }
//     }
//     return sum
// }

// console.log(calcSum(arr2));


//////////////////3
// const newArr = []
// function getPositiveNam(num) {
//     for (let i = 0; i < num.length; i++) {
//         newArr.push(Math.abs(num[i]))
//     }
//     return newArr
// }

// console.log(getPositiveNam(arr3));


///////////////////4
// const newArr = []
// function calcSquareRoot() {
//     for (let i = 0; i < arr4.length; i++) {
//         newArr.push(parseInt(Math.sqrt(arr4[i])))
//     }
//     return newArr
// }

// console.log(calcSquareRoot(arr4));


////////////////////5
// function changeObj() {
//     for (let item of arr5) {
//         item.name = 'Ulfat'
//         item.surname = 'Zakirli'
//         item.city = 'Baku'
//     }
//     return arr5
// }

// console.log(changeObj());








