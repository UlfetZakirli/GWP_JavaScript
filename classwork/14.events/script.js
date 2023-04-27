const email = document.querySelector('#email')
const btn = document.querySelector('#btn')
const firstName = document.querySelector('#firstName')
const surname = document.querySelector('#surname')
const password = document.querySelector('#pass')
const checkBox = document.querySelector('#checkBox')
const labelCheck = document.querySelector('#labelCheck')
const inputRaido = document.querySelectorAll('input[name="radio"]')

firstName.addEventListener('change', () => {
    if (surname.value && firstName.value && checkBox.checked) {
        btn.removeAttribute('disabled')
    } else {
        btn.disabled = true
    }
})
surname.addEventListener('change', () => {
    if (surname.value && firstName.value && checkBox.checked) {
        btn.removeAttribute('disabled')
    }
    else {
        btn.disabled = true
    }
})
checkBox.addEventListener('change', () => {
    if (surname.value && firstName.value && checkBox.checked) {
        btn.removeAttribute('disabled')
    } else {
        btn.disabled = true
    }
})

firstName.addEventListener('focus', () => {
    firstName.style.background = 'grey'
    firstName.style.color = '#fff'
})
firstName.addEventListener('mouseout', () => {
    firstName.style.background = ''
})

surname.addEventListener('mousemove', () => {
    surname.style.background = 'green'
})
surname.addEventListener('mouseout', () => {
    surname.style.background = ''
})

email.addEventListener('contextmenu', () => {
    email.style.background = 'red'
})
email.addEventListener('mouseout', () => {
    email.style.background = ''
})

password.addEventListener('focus', () => {
    password.value = 'Ulfat123'
})
password.addEventListener('mouseout', () => {
    password.value = ''
})

checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
        labelCheck.style.visibility = 'visible'
    } else {
        labelCheck.style.visibility = 'hidden'
    }
})

inputRaido.forEach((item) => {
    item.addEventListener('click', () => {
        setTimeout(() => {
            alert('Thanks!')
        }, 200)
    })
})



// const counter = str => [...str].reduce((a, c) => (a[c] = ++a[c] || 1) && a, {})


// const counter = (str) => [...str].reduce((sum, prev) => (sum[prev] = ++sum[prev] || 1) && sum, {})
// console.log(
//     counter("hello world")
// )  