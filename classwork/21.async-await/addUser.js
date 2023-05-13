const MOCK_API = 'http://localhost:8000/users'

const userForm = document.querySelector('#userForm')
const userName = document.querySelector('#userName')
const userEmail = document.querySelector('#userEmail')
const submitBtn = document.querySelector('.submitBtn')

const createUser = async () => {
    await fetch(MOCK_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username: userName.value,
                email: userEmail.value
            })
    })
    console.log('added');
}

userForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createUser()
    console.log('added');
    window.location.href = 'index.html'
})


function isDisabled() {
    if (userName.value && userEmail.value) {
        submitBtn.disabled = false
    } else {
        submitBtn.disabled = true
    }
}
userName.addEventListener('input', isDisabled)
userEmail.addEventListener('input', isDisabled)

