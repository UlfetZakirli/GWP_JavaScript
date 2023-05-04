
const myForm = document.querySelector('#myForm')
const exampleInputUserName = document.querySelector('#exampleInputUserName')
const exampleInputEmail1 = document.querySelector('#exampleInputEmail1')
const exampleInputPassword1 = document.querySelector('#exampleInputPassword1')
const exampleCheck1 = document.querySelector('#exampleCheck1')
const btn = document.querySelector('#btn')

let users = JSON.parse(localStorage.getItem('users')) || []

exampleInputUserName.addEventListener('input', () => {
  checkAnyInput()
})
exampleInputEmail1.addEventListener('input', () => {
  checkAnyInput()
})
exampleInputPassword1.addEventListener('input', () => {
  checkAnyInput()
})
exampleCheck1.addEventListener('input', () => {
  checkAnyInput()
})

myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = {
    id: Date.now(),
    username: exampleInputUserName.value,
    email: exampleInputEmail1.value,
    password: exampleInputPassword1.value,
    check: exampleCheck1.checked,
  }
  if (user.username && user.email) {
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  }
  window.location.href = 'users.html'
})

function checkAnyInput() {
  if (exampleInputUserName.value && exampleInputEmail1.value && exampleInputPassword1.value && exampleCheck1.checked) {
    btn.removeAttribute('disabled')
  } else {
    btn.setAttribute('disabled', '')
  }
}

