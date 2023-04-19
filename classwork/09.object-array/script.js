// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

// let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
// let names2 = ["Harry", "Newt", "Luna", "Cho"] //"HNLC"
// let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"PCRRMJ"


// console.log(secretName());
// 2.Manipulate array///////////////////////////////////////////////////////

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// 2.4.Sort users by age (ascending).


// const users = [
//     { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male', salary: '3001' },
//     { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male', salary: '200' },
//     { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female', salary: '300' },
//     { name: 'Hikmet', surname: 'Hesenov', age: '22', uni: 'UNEC', gender: 'male', salary: '320' },
//     { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male', salary: '420' },
//     { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female', salary: '3210' },
// ]

// console.log(users.sort((a, b) => b.salary - a.salary));


// 3.Shuffle array////////////////////////////////////////////////////////////////////
// const letters = ['a', 'b', 'c', 'd']
// const numbers = [1, 2, 3, 4, 5, 6, 7]

// console.log(letters.sort(() => Math.random() - .5));
// console.log(letters[Math.floor(Math.random() * letters.length)]);


// 4.Divide 2 the price of arr4.
// const arr4 = [
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


// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

// let num1 = 246 //246642
// let num2 = 102 //102201
// let num3 = 152 //152251

// function reverseNum(num) {
//     let operation = num.toString().split("").reverse().join("");
//     let result = parseInt(`${num}${operation}`)
//     console.log(typeof (+result))
// }
// reverseNum(num1)  //Minaye


// function reverseNum(num) {
//     return +(num + [...String(num)].reverse().join``)
// }

// console.log(reverseNum(num1));



/////////////////////////////////////////////////////////////////////////////////

// 2.4////////////////////////////////////////////
// const newArr = users.map((user) => {
//     if (user.gender === 'male') {
//         return { ...user, name: `Mr ${ user.name } ` }
//     } else {
//         return { ...user, name: `Ms ${ user.name } ` }
//     }
// })
// console.log(newArr);

//OR
// users.forEach((item) => item.gender === 'male' ? item.name = `Mr ${ item.name } ` : item.name = `Ms ${ item.name } `)
// console.log(users);


// 4
// arr4.map((item) => item.price /= 2)
// console.log(arr4);


// 5
// const reverseNum = () => {
//     return +(num1 + String(num1).split``.reverse().join``)
// }

// console.log(reverseNum());