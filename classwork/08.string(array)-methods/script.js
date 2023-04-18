// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
// const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']

// 2.String and Array
// let text = 'We are MERN-Stack developers'

// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
// const newArr = []
// text.split('').map((item, index) => item.toLowerCase() === 'r' ? newArr.push(index) : newArr)
// console.log(newArr);
// 5.Find index of first 'r' (excepting 'are').  // 9
// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']

let text = 'We are MERN-Stack developers'
let vowels = ['a', 'e', 'o', 'u', 'i']
let newText = []

// text.split("").map((item)=> vowels.includes(item) && newText.push(item))

// console.log([... new Set(newText)]); // Sevil
// console.log(Array.from(new Set (newText)) );//Leyla
// text.split("").map((item,i)=> {
//     if(vowels.includes(item) && text.indexOf(item)==i){
//         return newText.push(item)
//     }
// })

// const result = text.split``.filter((item, index) => vowels.includes(item) && !newText.includes(item) && newText.push(item))
// const result = text.split``.filter((item, index, arr) => vowels.includes(item) && arr.indexOf(item) === index)
// console.log(result);

// console.log(newText);
// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr3'.
// const arr3 = [
//     {
//         region: 'Yasamal',
//         area: 170,
//     },

//     {
//         region: 'Nizami',
//         area: 20,
//     },

//     {
//         region: 'Nesimi',
//         area: 10,
//     },

//     {
//         region: 'Sebail',
//         area: 30,
//     },
//     {
//         region: 'Xetai',
//         area: 30,
//     },
// ]
// const newArr = arr3.reduce((sum, item) => item.region.length === 6 ? sum += item.area : sum, 0) //Leyla.M
// console.log(newArr)


// console.log: (60)


// 4.Sort 'arr3' ascending order.
// const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]



// 5.Gather all nested array in one array.
// const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]

// console.log: [5, 8, 9, 'hi', "don't touch me", 0, '9']


// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
// const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']

// console.log(colors.sort((a, b) => a.length - b.length || a.localeCompare(b))); //Maqa

// console.log(colors.sort((a, b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length));

// console.log(colors.sort((a, b) => (a.length - b.length) ? a.length - b.length : a.localeCompare(b)));


// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']


// const letters = ['v', 'c', 'b', 'a', 'd']
// console.log(letters.sort((a, b) => a < b ? 1 : -1));
// console.log(letters.sort((a, b) => b.localeCompare(a)));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let myName = 'reshid' //ReshiD

// let newText = myName[0].toUpperCase() + myName.slice(1, - 1) + myName.at(-1).toUpperCase()
// console.log(newText);


// replace

// let text = 'How is it going?'
// let newText = text.replace('i', '')
// console.log(newText);

// const numbers = [4, 2, 1, 8, 11, 12, 22]
// const letters = ['b', 'c', 'a', 'e']
// const numbers = [3, 2, 6, 1, 9]
// numbers.sort((a, b) => a - b)


// letters.sort((a, b) => a > b ? 1 : -1) //letters
// letters.sort((a, b) => a.localeCompare(b)) //letters (better way)
// numbers.sort((a, b) => a - b) ///numbers
// console.log(letters);


// const arr = [5, [4, [9, [5, [3, [0, ['a', ['o']]]]]]]]

// console.log(arr.flat(Infinity));



// const students = [
//     {
//         firstName: 'Leyla',
//         age: 20
//     },
//     {
//         firstName: 'Maqa',
//         age: 29
//     },
//     {
//         firstName: 'Gulcin',
//         age: 6
//     }
// ]


// let sum = 0
// students.map((item) => sum += item.age)
// console.log(sum / students.length);

// let result = students.reduce((sum, current, index) => current.age > 10 ? sum + current.age : sum, 0)

// console.log(result);

// const arr = ['a', 'b', 'c']
// console.log(arr.slice(1));
// console.log(arr);





////////////////////////// slice, toUpperCase()
// const firstName = 'Nabir' // YaquT

// const newName = firstName[0].toUpperCase() + firstName.slice(1, -1) + firstName.at(-1).toUpperCase()
// console.log(newName);


// const text = 'How is it going!'
// // const newText = text.split`i`.join``
// const newText = text.replaceAll('i', '')
// console.log(text);
// console.log(newText);

// console.log(text.indexOf('i',5));

//
// const students = [

//     {
//         firstName: 'Zerife',
//         age: 18
//     },
//     {
//         firstName: 'Efsane',
//         age: 16
//     },
//     {
//         firstName: 'Sebine',
//         age: 28
//     },
//     {
//         firstName: 'Mezahir',
//         age: 48
//     },

// ]

// console.log(students.reduce((acc,curr)=>acc+curr.age,0)/students.length);

// let result = students.reduce((sum, prev, index, arr) => sum + prev.age, 0)
// console.log(result);


// const numbers = [3, 1, 3, 5, 11, 21, 22, 4, 2]
// const letters = ['v', 'b', 'c', 'a', 'd', 'A', 'B', 'C']

// // numbers.sort() //good
// // numbers.sort((a, b) => a - b) //better
// letters.sort((a, b) => a < b ? 1 : -1) //close to best
// numbers.sort((a, b) => a - b)



// console.log('a', 'a'.codePointAt());
// console.log('A', 'A'.codePointAt());

// // numbers.sort((a, b) => {
// //     if (a > b) return 1
// //     if (a < b) return -1
// //     if (a === b) return 0
// // })




// console.log({ numbers });
// console.log(letters);


// // splice, sort, reverse



// const arr = [1, [5], [6, [5, [6, [7, ['j']]]]]].flat(Infinity)
// console.log(arr);


