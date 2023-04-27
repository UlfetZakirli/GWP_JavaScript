const form = document.createElement('form')
const labelName = document.createElement('label')
const labelSurname = document.createElement('label')
const labelCheckBox = document.createElement('label')
const inputName = document.createElement('input')
const inputSurname = document.createElement('input')
const inputCheckBox = document.createElement('input')
const inputRadio = document.createElement('input')
const inputRadio2 = document.createElement('input')
const button = document.createElement('button')
const next = document.createElement('button')
const start = document.createElement('button')
const p = document.createElement('p')
let time = 15
let interval

inputName.required = true
inputSurname.setAttribute('required', '')
inputCheckBox.required = true
inputRadio.required = true

inputCheckBox.setAttribute('type', 'checkbox')
inputRadio.setAttribute('type', 'radio')
inputRadio.setAttribute('name', 'radio')
inputRadio2.setAttribute('type', 'radio')
inputRadio2.setAttribute('name', 'radio')
button.setAttribute('disabled', '')
next.setAttribute('disabled', '')


document.body.append(start)
document.body.append(p)
document.body.append(form)
form.append(labelName)
form.append(inputName)
form.append(labelSurname)
form.append(inputSurname)
form.append(inputCheckBox)
form.append(inputRadio)
form.append(inputRadio2)
form.append(button)
document.body.append(next)

form.style.border = '1px dashed #000'
form.style.height = '80vh'
form.style.display = 'flex'
form.style.gap = '10px'
form.style.flexDirection = 'column'
form.style.justifyContent = 'center'
form.style.alignItems = 'center'
inputCheckBox.style.accentColor = 'red'
p.style.border = '1px solid #000'
p.style.width = '40px'
p.style.padding = '5px'

start.innerHTML = "Let's start..."
labelName.innerHTML = '<strong>Name</strong>'
labelSurname.innerHTML = '<strong>Surname</strong>'
button.innerHTML = 'Submit'
next.innerHTML = 'Next Page >'


start.addEventListener('click', () => {
    clearInterval(interval)
    button.removeAttribute('disabled')
    p.style.color = 'blue'
    p.style.borderColor = 'blue'
    p.style.width = '40px'
    start.disabled = true

    time = 15
    p.innerHTML = `00:${time}`
    interval = setInterval(() => {
        time -= 1
        p.innerHTML = `00:${time}`
        if (time < 10) {
            p.style.color = 'red'
            p.style.borderColor = 'red'
            if (time == 0) {
                clearInterval(interval)
                p.innerHTML = 'You missed ):'
                button.disabled = true
                p.style.width = '90px'
                start.removeAttribute('disabled')
            }
        }
    }, 1000)
})
p.innerHTML = `00:${time}`

button.addEventListener('click', () => {
    next.removeAttribute('disabled')
})

next.addEventListener('click', () => {
    alert('Finished!')
})



