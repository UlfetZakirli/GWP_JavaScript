const addBtn = document.querySelector('#addBtn')
const boxes = document.querySelector('.boxes')
addBtn.addEventListener('click', () => {
    window.location.href = 'index.html'
})
let users = JSON.parse(localStorage.getItem('users')) || []

console.log(users);
function allUsers() {
    boxes.innerHTML = ''
    users.forEach((user) => {
        const box = document.createElement('div')
        boxes.append(box)
        box.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 20px; color:'red';">User</h2>
        <div>
            <h5 id="userName">name:${user.username} </h5>
            <h6 id="userEmail">email:${user.email} </h6>
            <button onclick='deleteUser(${user.id})' class='btn btn-danger'>Delete</button>
            <br>
        </div>
        `
        box.classList.add('box')
    })
}
allUsers()

function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId)
    localStorage.setItem('users', JSON.stringify(users))
    allUsers()
    console.log('ss');
}





