const BASE_URL = 'http://localhost:8000/users'

const tBody = document.querySelector('#tBody')
const burgerModal = document.querySelector('.burger-modal')
const burgerBar = document.querySelector('.burger-bar')
const modalRemove = document.querySelector('#modal-remove')

async function getAllUsers() {
    const res = await axios.get(BASE_URL)
    const data = await res.data
    tBody.innerHTML = ''
    data.forEach((user) => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <div class='card' style='padding:20px'>
        <div class='title'>
        <span style='color:blue'>Id: ${user.id}</span>
        <span style='color:green; margin-left:10px'>Date: ${user.date}</span>
        </div>
        <br>
        <div class='content d-flex'>
        <img alt='photo' src='${user.photo}' width="40" height="40"  style="border-radius: 100%; margin-top:3px" alt="">
        <div style='margin-left:20px'>
        <span >${user.name} ${user.surname}</span>
        <br>
        <span>${user.email}</span>
        <span class='actions' style='margin-left:300px'>
        <a href="#" onclick=editUser('${user.id}') class="btn btn-success btn-sm">Edit</a>
        <a href="#" onclick=deleteUser('${user.id}') class="btn btn-danger btn-sm">Delete</a>
        </span>
        </div>
        </div>
        </div>

        <td>${user.id}</td>
        <td><img src='${user.photo}' width="40" height="40" style="border-radius: 100%;" alt=""></td>
        <td>${user.name}</td>
        <td>${user.surname}</td>
        <td>${user.email}</td>
        <td>${user.date}</td>
        <td>
        <a href="#" onclick=editUser('${user.id}') class="btn btn-success btn-sm">Edit</a>
        <a href="#" onclick=deleteUser('${user.id}') class="btn btn-danger btn-sm">Delete</a>
        </td> 
        `
        tBody.append(tr)
    })
}
getAllUsers()


async function deleteUser(userId) {
    await axios.delete(`${BASE_URL}/${userId}`)
}

 function editUser(userId) {
    window.location.href = `userForm.html?id=${userId}`
}

burgerBar.addEventListener('click', () => {
    burgerModal.style.display = 'block'
})

modalRemove.addEventListener('click', () => {
    burgerModal.style.display = 'none'
})