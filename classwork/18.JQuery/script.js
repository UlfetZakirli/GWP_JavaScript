
// 1.Get random color (JQuery).
// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'brown']
// $('#btn').click(()=>{
//     // $('#text').css({color:'red'})
//     $('#text').css('color',colors[Math.floor(Math.random()*colors.length)])
// })

// // // 2.Create two buttons that is the first one used to hide Title, second one used to get it back.(JQuery)
// $('#showing').click(() => {
//     $('#text').show()
// })

// $('#hidden').click(() => {
//     $('#text').hide()

// })


// 3.Loop each value in console (JQuery).(each)
// $.each(colors,(_,el)=>{
//     console.log(el);
// })


// 4.Sum only true values' index (use map method in JQuery).
//  const numbers = [4, 2, false, null, 'false', NaN, undefined, 8, true, '9']
// console.log(); //29
// let sum=0
// $.map(numbers,(item,index)=>{
//     if(item){
//         sum+=index
//     }
// })

// console.log(sum);






///////////////////////////////////// Algorithms//////////////////////////////////////////////

// 1. Create function called 'capitalizeFirst' that capitalize the First Letter in each word.
// function capitalizeFirst(str) {
//     return str.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" ");
// }

// console.log(capitalizeFirst("This is a title")); // This Is A Title
// console.log(capitalizeFirst("capitalize every word")); //Capitalize Every Word



// 2. Create a function called 'encoded' that takes a string and decodes words if its length greater than 4 .

// function encoded(str) {
//     const arr = str.split` `
//     // return arr.map((item) => item.length > 4 ? item.split``.map((item2) => item2.replace(item2, '*')).join`` : item).join` `
//     //OR
//     // return arr.map((item) => item.length > 4 ? item.split``.map((item2) => item2 = '*').join`` : item).join` `
// }

//By Fill method

// function encoded(str) {
//     const arr = str.split` `
//     // return arr.map((item) => item.length > 4 ? item.split``.fill('*').join`` : item).join` `
// }

//Long Way

// function encoded(str) {
//     let arr = []
//     const result = []
//     let arrForm = str.split` `
//     for (let i = 0; i < arrForm.length; i++) {
//         if (arrForm[i].length > 4) {
//             arr.length = arrForm[i].length
//             result.push(arr.fill("*").join``)

//         } else {
//             result.push(arrForm[i])
//         }
//     }
//     return result.join` `
// }

// console.log(encoded("The code is fourty"));  // The code is ******
// console.log(encoded("Two plus three is five")); //Two plus ***** is five
// console.log(encoded("aaaa aaaaa 1234 123456")); //aaaa ***** 1234 ******



// // 3. Clear sky
// function clearFog(str) {
//     // return str.match(/[fog]/gi) ? str.replace(/[fog]/gi, "") : "It's a clear day!"

// }

// console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog")) // "trees"
// console.log(clearFog("sky"));  //It's a clear day!


// let test = [1, 2, 3]
// console.log(test.fill(9));

