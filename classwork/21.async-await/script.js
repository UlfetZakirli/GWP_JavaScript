
const MOCK_API = 'https://northwind.vercel.app/api/suppliers'
// import { editUser } from './editUser.js'
const cards = document.querySelector('#cards')
const addBtn = document.querySelector('#addBtn')

async function getAllUsers() {
    const res = await fetch(MOCK_API)
    const data = await res.json()
    cards.innerHTML = ''

    data.forEach((user) => {
        const card = document.createElement('div')
        const div = document.createElement('div')
        const iconEdit = document.createElement('i')
        const iconRemove = document.createElement('i')

        div.classList.add('m-2')
        iconEdit.classList.add('fa-solid', 'fa-pen', 'p-2', 'edit')
        iconRemove.classList.add('fa-solid', 'fa-trash-can', 'delete')
        card.classList.add('card', 'col-5')

        card.innerHTML = `
              <div>
              <h3>${user.address?.city}</h3>
              <span>${user.address?.country}</span>
              </div>
        `
        card.append(div)
        div.append(iconEdit, iconRemove)
        cards.append(card)

        iconRemove.addEventListener('click', () => {
            deleteUser(user.id)
        })

        iconEdit.addEventListener('click', () => {
            // editUser(user.id)
            window.location = 'editUser.html'
        })

    })
}

getAllUsers()

async function deleteUser(userId) {
    await fetch(`${MOCK_API}/${userId}`, {
        method: 'DELETE'
    })
    getAllUsers()
}


addBtn.addEventListener('click', () => {
    window.location.href = 'addUser.html'
})









