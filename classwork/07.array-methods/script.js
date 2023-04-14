///////////////////// 1.Splice method:
// const arr1 = ['a', 'b', 'c', 'd', 'e']
// 1.Remove 'b' in arr1.
// 2.Remove 'c' and 'd' in arr1.
// 3.Remove last letter in arr1 (dynamically).
// 4.Remove last three letters in arr1 (dynamically).
// 5.Insert '3' and '4' to arr1 after 'c'.
// 6.Replace 'a' with 'A' and 'b' with 'B'.

////////////////////// 2.Slice method
// const arr2 = ['user1', 'user2', 'user3', 11, 3, 5]
// 1.Create a new array called "newArr" and copy 'arr2' to it.
// 2.Create a new array from 'user2' to 3(includes 3).
// 3.Create a new array start 'user3' in arr2.

////////////////////// 3.Concat method
// const arr3 = [1, 2, 3].
// const arr33 = [4, 5, 6].
// 1.Concat 'arr3' with 'arr33'.
// 2.Concat ['a','b'] to arr3.

////////////////////// 4.forEach method
// const arr4 = ['name', 'surname', 10, 'age', 'city', 'uni', 80, 20]
// 1.Loop 'arr4' and show its each value in console
// 2.Loop 'arr4' and show only numbers in console with multiply by 2.

////////////////////// 5. Map method
// const arr5 = [4, 5, 6, '2', 6, true, undefined, '55']
// 1.Map and show each value in console
// 2.Map 'arr5' and multiply only number values by 5, otherwise just return value.
// 3.Convert each value of 'arr5' to String.
// 4.Convert each value of 'arr5' to Boolean.
// 5.Convert each value of 'arr5' to Number.

// const result = arr5.map((item) => Number(item))
// console.log(result);

///////////////////// 6.Filter method
// const mixArray = ['1', 2, 4, 'a', false, '9', 12, '42', undefined, 3, true, null]
// 1.Find out numbers(typeof number) in 'mixArray'.
// const result = mixArray.filter(item => typeof item === 'number')
// console.log(result);
// 2.Find out strings(typeof strings) in 'mixArray'.
// 3.Find out boolean(typeof boolean) in 'mixArray'.
// 4.Find out falsy values in mixArray'.

///////////////////// 7.Filter and Map methods
// const arr7 = [44, 3, 6, '2', 6, true, undefined, '55', null]
// 1.Convert to 'Number' each value of 'arr7' and find max value in 'arr7'(not falsy).

// const arr7 = [44, 3, 6, '2', 6, true, undefined, '55', null]

// const newArr9 = arr7.filter(item => Number(item))
// const newArr10 = Math.max(...newArr9.map((item) => Number(item)))
// console.log(newArr10);














// splice method (remove ,insert)

// const arr = ['a', 'b', 'c', 'd']
// const result = arr.splice(0, 2)
// console.log({arr});
// console.log({result});

// slice method
// const arr = ['a', 'b', 'c', 'd']
// arr.reverse()
// console.log(arr);
// const result = arr.slice(2)
// console.log(result);
// console.log(arr);


// pop, push,shift,unshift,
// splice,sort,reverse




// filter,find,findIndex,findLastIndex,indexOf,lastIndexOf,reduce,reduceRight,reverse(),map,forEach




// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const newArr = arr2.concat(arr1)
// console.log(newArr);


// const newArr = [33].concat([[44], [88], [[[[99]]]]])
// console.log(newArr);


// const newArr = arr1.concat(arr2)
// console.log(arr1);
// console.log(newArr);


// const students = ['Reshid', 'Senem', 'Zenfira', 'Leyla', 'Maqa']
// const numbers = [1, 2, 3, 4, 5]

// // const newArr = []

// // numbers.forEach((item, index, myArr) => {
// //     newArr.push(item * 2)
// // })

// // console.log(newArr);




// const arr = [false, 'Ulfat', '6', 3, undefined, 33]

// const newArr1 = arr.filter(item => typeof item === 'number').map(item => item * 5)

// const newArr2 = arr.map(item => {
//     if (typeof item === 'number') {
//         return item * 5
//     }
//     return item
// })


// console.log({ newArr1 });
// console.log({ newArr2 });



// console.log([5].concat({ name: 'ulfat' }, 'Ukjsjd', false))


// Array methods
// pop,push,shift,unshift
// splice,slice,concat,reverse,join,forEach,map,find,findIndex, findLastIndex,indexOf,lastIndexOf,filter,at,sort,reduce,reduceRight,fill.
// Array.isArray


//////////////////////////////////////// splice method (insert,remove,replace)
// const arr = ['a', 'b', 'c', 'd']
// arr.splice(1, 2)
// console.log(arr);
// // arr.splice(0, 2,'A','B')
// arr.splice(2, 0, 1, 2, 3, 4)
// console.log(arr);

// splice,sort,reverse() //method which can modify original array

/////////////////////////////////////////// slice method
// const arr = ['a', 'b', 'c', 'd']
// const result = arr.slice(0, 2)
// console.log({ result }); // a,b
// console.log({ arr }); //original array


/////////////////////////////////////////// concat method


// const arr = ['Fatime'].concat('Nermin', 'Nabir', 'Ehed', 2,false,undefined,{
//     firstName:'Nazim057'
// })
// console.log(arr);


// forEach and map
// forEach
// const students = ['Sebine', 'Yaqut', 'Nermin', 'Sevil']
// students.forEach(student => console.log(student))

// students.forEach((student, index, arr) => {
//     console.log(student);
// })

// // for (index)
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }
// // for...of
// for (let student of students) {
//     console.log(student);
// }


// const result = students.map((student) => {
//     console.log(student);
// })


// const students = ['Sebine', 'Yaqut', 'Nermin', 'Sevil']
// const numbers = [1, 2, 3, '4', '9', false, 9, 6, undefined]

// const reuslt = numbers.map((item) => typeof item === 'number' && item > 3)
// console.log(reuslt);















