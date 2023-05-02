
/////////////////////////////////////////////////////// LocalStorage Tasks/////////////////////////////////////////////////////


// 1.Create a button, when you click that, it adds firstName:'Kamran', lastName:'Akberov', age:'23' to localeStorage.
// 1.1.Console localStorage length.

// 2.Console localeStorage keys.

// 3.Console localeStorage values.

// 4.Console first key in localStorage.
// 4.1.Console all keys in arr.

// 5.Console first value in localStorage.
// 5.1.Console all values in arr.

// 6.Create other two buttons first one called 'delete' when you click it, it removes firstName
// 6.1. Second button called 'empty' when it is clicked, it removes all info from localStorage

// 7.Create Sign Up Form.

// 8.show console localeStorage key/value as Object.

// const myForm = document.querySelector('#myForm')
// const exampleInputUserName = document.querySelector('#exampleInputUserName')
// const exampleInputEmail1 = document.querySelector('#exampleInputEmail1')
// const exampleInputPassword1 = document.querySelector('#exampleInputPassword1')
// const exampleCheck1 = document.querySelector('#exampleCheck1')


// const users = JSON.parse(localStorage.getItem('users')) || []

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const user = {
//         username: exampleInputUserName.value,
//         email: exampleInputEmail1.value,
//         password: exampleInputPassword1.value,
//         check: exampleCheck1.checked
//     }
//     if (user.username && user.email) {
//         users.push(user)
//         localStorage.setItem('users', JSON.stringify(users))
//     }
// })









////////////////////////////////////////////////////////////////////////////////////////////////////


//Loop values and keys of localStorage ////////////////////////////////////////////////

//first way
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     console.log(localStorage.getItem(key));
// }

//second way

// for (let key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//         // console.log(key);
//         console.log(localStorage.getItem(key));
//     }
// }

//third way

// let values = Object.values(localStorage)
// for (let value of values) {
//     console.log(value);
// }

// let keys = Object.keys(localStorage)
// for (let key of keys) {
//     console.log(key);
// }

// localStorage.setItem('num', JSON.stringify({ name: 'Ulfat', surname: 'Zakirli' }))
// let value = localStorage.getItem('num')
// console.log(JSON.stringify(localStorage, null, 200));
// console.log(value);


////////////////////////////////////////////////////////////////////////////////////////////


// const myForm = document.querySelector('#myForm')
// const exampleInputEmail1 = document.querySelector('#exampleInputEmail1')
// const exampleInputPassword1 = document.querySelector('#exampleInputPassword1')
// const exampleCheck1 = document.querySelector('#exampleCheck1')

// let users = JSON.parse(localStorage.getItem('users')) || []

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let myUser = {
//         username: exampleInputUserName.value,
//         email: exampleInputEmail1.value,
//         password: exampleInputPassword1.value,
//         checked: exampleCheck1.checked
//     }
//     if (myUser.username && myUser.email) {
//         users.push(myUser)
//         localStorage.setItem('users', JSON.stringify(users))
//     }
// })

// / 5.show console localeStorage key/value as Object
//


// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//     localStorage.setItem('firstName', 'Kamran')
//     localStorage.setItem('lastName', 'Akberov')
//     localStorage.setItem('age', '23')
// })

// let arr = []
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     let value = localStorage.getItem(key)
//     arr.push(value)
// }

// console.log(arr);



// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     console.log(JSON.parse(localStorage.getItem(key)));
// }

// let keys = Object.keys(localStorage)
// for (let key of keys) {
//     console.log(key);
// }