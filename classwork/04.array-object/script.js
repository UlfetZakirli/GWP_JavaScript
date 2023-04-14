
//////////////////// Array tasks ////////////////////////

// 1.Create an array which contains numbers from 0 to 10.
// 2.Create an array which contains one number,one boolean value and one string.
// 3.Create an array assign in numbers(0-5), then create another array which is dublicate of first array(by referance).
// 4.Create an array assign in numbers(0-7), then add 8 and 9 to it.
// 5.Create an empty array, then add three numbers(5,6,7). then remove 5 in front of array, and add 2 in front of array.
// 6.Create an array add your name, surname, age and Quba". then change  Quba to Qusar. (used length, and static value)
// 7.Loop "first task" values in console.log() using (for...of) loop.

/////////////////// Object tasks ///////////////////////

// 8.Create an object named "obj" add id:1, firstName:your name, lastName:your surname, location:GDU 2.
// 9.Create an object named "obj2" and copy "obj" by referance to "obj2".
// 10.Change 8 task id:1 to id:3.
// 11.Loop 8 task (for...in) and console each value.
// 12.Loop 8 task (for...in) and console each key.
// 13.Delete localtion from 8 task and console it again.
// 14.Create another object named "newObj" and assign it 8 task value using Object.assign() method.


// 15.Create user1 object add name, surname, location(which container nested object: street and city) 
// and user2(which container same values) add both object to a array named 'users'.then change user2 localtion Gence to Baku.





// const a = Object.assign(b)


// const arr = [1, 2, 3, 4]
// for (let num of arr) {
//     console.log(num);
// }


// const obj = {
//     id: 1
// }








// Array

// There are two ways to create array
// const arr1 = new Array(19)
// console.log('arr1', arr1);

// const students = ['Zerife', 'Nabir', 'Leyla', "Fatime", 'Narmin', 'Minaye']
// console.log(students.at(-2));
// console.log(students[-1]);


////////////////////// Array push() and pop() methods

// students.unshift('Nurlana') // add any numbers of value to back of array
// console.log(students);

// students.pop() //remove a value back of array
// console.log(students);


///////////////////// Array shift() and unshift() methods 

// students.unshift('Ehed', 'Sebine') // add any numbers of item to add to in front of array
// console.log(students);

// students.shift()
// students.shift()

// console.log(students);




// for (let value of users) {
//     console.log(value);
// }

// console.log('................................break');
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// console.log(users[users.length - 1]);  //5
// console.log(users.at(-1));


// console.log(users[4]);  //5

// by referance
// const user1 = ['Zerife', 'Nabir']
// console.log('user1', user1);

// const user2 = user1
// console.log('user2', user2);

// user2[0] = 'Minaye'
// console.log('user1', user1);
// console.log('user2', user2);



// by value

// let a = 8
// let b = a
// console.log({ a });
// console.log({ b });
// b = 4
// console.log({ b });
// console.log({ a });



// const user1 = []
// const user2 = user1
// console.log(typeof user1);


// const styles = ['Jazz', 'Blues']
// console.log('1', styles);
// styles.push("Rock-n-Roll")
// console.log('2', styles);
// styles[(styles.length - 1) / 2] = 'Classics'
// console.log('3', styles);
// styles.shift()
// console.log('4', styles);
// styles.unshift('Rap', 'Reggae ')
// console.log('5', styles);


// How much are there data types?
8
// primitive 7
// none-primitive object(1)

// Obejct
// Array
// Error,
// Date ... 

// There are two ways to create Object

// const obj1 = new Object() //1 constructor
// obj1.name = 'Zerife'
// obj1.surname = 'Zerifeli'
// console.log({ obj1 });

// name,surname- key
// Zerife,Zerifeli -value

// const obj2 = {   
//     name: 'Zerife',
//     surname: 'Zerifeli',
//     location: {
//         city: 'Gence',
//         street: 'Nizami 102',
//     },
//     "is Student": true,
//     salary: undefined,
// }

// console.log(obj2.location.houseNum.doorNumber);

// obj2['is Student'] = false
// console.log(obj2['location']['city']);
// console.log(obj2.location.city);


// console.log(obj2.location.street);
// console.log(obj2['location']['street'], obj2['location']['city']);


// let,const,var, for, if, else,while,do while, switch






// const obj2 = {
//     name: 'Zerife',
//     surname: 'Zerifeli',
//     location: {
//         city: 'Gence',
//         street: 'Nizami 102',
//     },
//     "is Student": true,
//     salary: undefined,
// }

// const obj1 = Object.assign(obj2)
// const obj1 = obj2


// const obj1 = { ...obj2, name: 'Minaye' }
// console.log(obj1);

// console.log({ obj1 });

// // delete obj2.name
// // delete obj2.surname
// // console.log(obj2);


// // const arr = [1, 2, 3]
// // arr[10] = 10
// // console.log(arr);


// for (let value in obj2) {
//     console.log(obj2[value]);
// }
// for (let key in obj2) {
//     console.log(key);
// }



// let a = 4
// let b = 2
// // [a] = [b]
// console.log({ a });
// console.log({ b });


