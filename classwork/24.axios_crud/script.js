
const BASE_API = 'http://localhost:8000/users'

const notification = document.querySelector('#notification')
const userForm = document.querySelector('#userForm')
const deleteBtn = document.querySelector('#deleteBtn')
const editBtn = document.querySelector('#editBtn')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const cardNumber = document.querySelector('#cardNumber')
const tBody = document.querySelector('#tBody')
const searchInput = document.querySelector('#searchInput')
const thFirstName = document.querySelector('#thFirstName')
const arrowUp = document.querySelector('.arrowUp')
const arrowDown = document.querySelector('.arrowDown')
const submitBtn = document.querySelector('#submitBtn')
const usersCount = document.querySelector('#usersCount')


let isEditing = false
let isSorted = false
let editedId
let copyArr = []
let filteredArr = []

async function getAllUsers() {
    const res = await axios.get(BASE_API)
    const data = res.data
    tBody.innerHTML = ''
    copyArr = data
    filteredArr = (searchInput.value || filteredArr.length) ? filteredArr : data
    filteredArr.forEach((user) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.email}</td>
        <td>${user.cardnumber.split``.fill("*", 0, cardNumber.value.length - 5).join``}</td>
        <td>
          <a href="#" onclick=editUser('${user.id}') id="editBtn" class="btn btn-warning btn-sm edit">Edit</a>
          <a href="#" onclick=deleteUser('${user.id}') id="deleteBtn" class="btn btn-danger btn-sm delete">Delete</a>
          <a href='#' onclick=getUserDetail('${user.id}','${user.name}','${user.date}') class='btn btn-primary btn-sm'>Detail</a>
        </td>
     `
        tBody.append(tr)
    })

}
getAllUsers()

function showAlert(message, className) {
    notification.innerHTML = message
    notification.className = `alert alert-${className}`
    notification.removeAttribute('hidden')
    setTimeout(() => {
        notification.setAttribute('hidden', '')
    }, 20000)
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const date = new Date()
    // const encodedCardNum = cardNumber.value.slice(0, cardNumber.value.length - 4).split``.map((item) => item.replace(item, "*")).join`` + cardNumber.value.slice(-4)
    // const encodedCardNum = cardNumber.value.split``.fill("*", 0, cardNumber.value.length - 5).join``
    const user = {
        name: firstName.value,
        surname: lastName.value,
        email: email.value,
        cardnumber: cardNumber.value,
        date: date.toLocaleDateString()
    }
    if (!firstName.value || !lastName.value || !email.value) {
        showAlert('Please fill in all fields', 'warning')
    }
    else if (isEditing) {
        showAlert('Edited User successfully!', 'success')
        editUser2(editedId, user)
        
        getAllUsers()
    } else {
        showAlert('Added users successfully!', 'success')
        isEditing = false
        addUser(user)
        

    }
    submitBtn.value = 'Submit'
    emptyInput()
})

async function deleteUser(userId) {
    showAlert('Deleted User', 'danger')
    await axios.delete(`${BASE_API}/${userId}`)
    getAllUsers()
}


async function addUser(user) {
    await axios.post(BASE_API, user)
    getAllUsers()
}


async function editUser(userId) {
    const res = await axios(`${BASE_API}/${userId}`)
    const data = res.data
    firstName.value = data.name
    lastName.value = data.surname
    email.value = data.email
    cardNumber.value = data.cardnumber
    isEditing = true
    editedId = userId
    submitBtn.value = 'Edit'
}

async function editUser2(userId, user) {
    await axios.patch(`${BASE_API}/${userId}`, user)
    getAllUsers()
}

function emptyInput() {
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    isEditing = false
}

searchInput.addEventListener('input', () => {
    filteredArr = copyArr
    filteredArr = filteredArr.filter((user) => `${user.name} ${user.surname}`.toLowerCase().includes(searchInput.value.toLowerCase()))
    getAllUsers()
})


thFirstName.addEventListener('click', () => {
    if (isSorted) {
        isSorted = !isSorted
        arrowUp.style.display = 'inline-block'
        arrowDown.style.display = 'none'
        filteredArr.sort((a, b) => a.name.localeCompare(b.name))
    } else {
        isSorted = !isSorted
        arrowUp.style.display = 'none'
        arrowDown.style.display = 'inline-block'
        filteredArr.sort((a, b) => b.name.localeCompare(a.name))
    }
    getAllUsers()
})


async function getUserDetail(userId, username, userDate) {
    await axios.get(`${BASE_API}/${userId}`)
    showAlert(`User: ${username} has been created on - ${userDate}!`, 'primary')
}





///////////////////////////////////////////////////////////////////////////////

// const date = new Date()
// console.log(date.toLocaleDateString()); //use it


// console.log(date.toLocaleString());

// console.log(date.toLocaleTimeString());

// // const obj={
// //     username: 'Sevil',
// //     date: date.toLocaleDateString()

// // }


