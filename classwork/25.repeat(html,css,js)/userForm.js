const BASE_URL = 'http://localhost:8000/users'
const userId = new URLSearchParams(window.location.search).get('id')
console.log(userId);
const userForm = document.querySelector('#userForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const userPhoto = document.querySelector('#userPhoto')
const submitBtn = document.querySelector('#submitBtn')


async function createUser() {
    const date = new Date()
    console.log(userPhoto.value);
    const user = {
        photo: `./img/${userPhoto.value.split("\\")[2]}`,
        name: firstName.value,
        surname: lastName.value,
        email: email.value,
        date: date.toLocaleString()
    }
    await axios.post(BASE_URL, user)
    window.location.href = 'index.html'

}


if (userId) {
    async function getUserById() {
        const res = await axios(`${BASE_URL}/${userId}`)
        const data = await res.data
        firstName.value = data.name
        lastName.value = data.surname
        email.value = data.email
    }
    getUserById()
    submitBtn.value = 'Edit'
}

async function editUser() {
    const user = {
        photo: `./img/${userPhoto.value.split("\\")[2]}`,
        name: firstName.value,
        surname: lastName.value,
        email: email.value,
    }
    await axios.patch(`${BASE_URL}/${userId}`, user)
    window.location.href = 'index.html'

}

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (userId) {
        editUser()
        console.log('edited');
    } else {
        createUser()
    }
})



