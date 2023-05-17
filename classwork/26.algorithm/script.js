//////////////////////////////// Algorithm /////////////////////////////////////
// Task 1
// function fun1(arr) {
//    return arr.sort((a,b)=>a.length-b.length)

// }

// console.log(fun1(["may", "april", "september", "august"]));  // ['may', 'april', 'august', 'september']
// console.log(fun1(["a", "ccc", "dddd", "bb"]));  //  ['a', 'bb', 'ccc', 'dddd']


// Task 2
// function fun2(str) {
//     // const numbers = str.split(" ").map(Number);
//     // const max = Math.max(...numbers);
//     // const min = Math.min(...numbers);
//     // return `${max} ${min}`

//     // let arr = str.split(" ")
//     // return `${Math.max.apply("",arr)} ${Math.min.apply("Fatima",arr)}`

//     // let arr = str.split(" ").sort((a,b)=> +a - +b)
//     // return `${arr.at(-1)} ${arr.at(0)}`
// }
// console.log(fun2("2 3 4 5 6"));    // '6 2'
// console.log(fun2("1 2 -6 4 7"));    // '7 -6'

// Task 3
// function fun3(tileHand) {
//     // let sum = 0
//     // for (let i = 0; i < tileHand.length; i++) {
//     //     sum+= tileHand[i].score
//     // }
//     // return sum
//     return tileHand.reduce((sum,curr)=>sum+curr.score,0)
// }
// console.log(fun3([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
// ])); // 28

// console.log(fun3([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 }
// ])); // 15


// Task 4
// function fun4(...boxes) {

//     return boxes.reduce((sum, item) => sum + item.reduce((mult, curr) => mult * curr, 1), 0)
// }







// const fun4 = (...boxes) => boxes.reduce((acc, [f, s, t]) => acc + f * s * t, 0)

// console.log(fun4([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
// console.log(fun4([2, 2, 2], [2, 1, 1]));  // 10



// Task 5
function fun5(people) {
    // let value=Object.values(people)
    // let max=Math.max(...value)
    // return Object.keys(people).filter(key=>people[key]==max).toString()
    return Object.keys(people).reduce((a, b) => people[a] > people[b] ? a : b)
}
console.log(fun5({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29
})); //Emma


console.log(fun5({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33
}));  // Sam
















// Task 4
//first way
// function fun4(...boxes) {
// arr=boxes.map((el)=>el.reduce((acc,curr)=>acc*=curr))
// return arr.reduce((acc,curr)=>acc+=curr)
// }

//second way
// function fun4(...boxes) {
//     // return boxes.reduce((sum, prev) => sum + prev.reduce((mult, prev) => mult * prev, 1), 0)
// }

// third way

// const fun4 = (...boxes) => boxes.reduce((acc, [f, s, t]) => acc + f * s * t, 0)

// console.log(fun4([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
// console.log(fun4([2, 2, 2], [2, 1, 1]));  // 10



// Task 5
// function fun5(obj) {

//     return Object.keys(obj).reduce((key1, key2) => obj[key1] > obj[key2] ? key1 : key2, {})
// }

// console.log(fun5({
//     Jack: 45,
//     Emma: 71,
//     Ben: 100,
//     Amy: 15,
// })); //Emma

// console.log(fun5({
//     Max: 9,
//     Josh: 13,
//     Sam: 48,
//     Anne: 33
// }));  // Sam



// arr = [5, 6, 8]
// console.log(arr.reduce((a, b) => a < b ? a : b));
// const obj = {
//     name: 'Ulfat',
//     surname: 'Zakirli'
// }


// for (let key in obj) {
//     // console.log(key);
//     console.log(obj[key]);
// }










////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 1
// function fun1(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }
// console.log(fun1(["may", "april", "september", "august"]));  // ['may', 'april', 'august', 'september']
// console.log(fun1(["a", "ccc", "dddd", "bb"]));  //  ['a', 'bb', 'ccc', 'dddd']


// // Task 2
// function fun2(str) {
//     return `${Math.max(...str.split` `.map(Number))} ${Math.min(...str.split` `.map(Number))}`
// }
// console.log(fun2("2 3 4 5 6"));    // '6 2'
// console.log(fun2("1 2 -6 4 7"));    // '7 -6'

// Task 3
// function fun3(tileHand) {
//     let sum = 0
//     tileHand.map((item) => sum += item.score)
//     return sum
// }

// console.log(fun3([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
// ])); // 28

// console.log(fun3([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 }
// ])); // 15


// Task 4
// function fun4(...boxes) {
//     return boxes.reduce((sum, prev) => sum + prev.reduce((mult, prev) => mult * prev, 1), 0)
// }

//OR

// const fun4 = (...boxes) => boxes.reduce((result, [f, s, t]) => result + f * s * t, 0)

// console.log(fun4([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
// console.log(fun4([2, 2, 2], [2, 1, 1]));  // 10

// Task 5

//first way
// function oldest(people) {
//     let keyValue = Object.entries(people)
//     let value = Math.max(...Object.values(people))
//     for (let i = 0; i < keyValue.length; i++) {
//         if (keyValue[i].includes(value)) {
//             return keyValue[i][0]
//         }
//     }
// }

//second way
// function oldest(people) {
//     return Object.keys(people).reduce((a, b) => people[a] > people[b] ? a : b)
// }


// console.log(oldest({
//     Emma: 71,
//     Jack: 45,
//     Amy: 15,
//     Ben: 29
// })); //Emma

// console.log(oldest({
//     Max: 9,
//     Josh: 13,
//     Sam: 48,
//     Anne: 33
// }));  // Sam




// const arr = [6, 2, 3, 5, 1, 9, 8]

// console.log(Math.max(...arr));
// console.log(Math.max.apply(null, arr));

// let maxNum = arr.reduce((a, b) => a > b ? a : b)
// console.log(maxNum)
