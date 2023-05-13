// // // // let countries = []
// // // // const getSuppliers = async () => {
// // // //     const url = "https://northwind.vercel.app/api/suppliers"
// // // //     const res = await fetch(url, {
// // // //         method: 'POST',
// // // //         headers: {
// // // //             'Content-type': 'application/json'
// // // //         },

// // // //     })
// // // //     const data = await res.json()
// // // //     let country = data.filter((item) => item.address.country === 'Japan')
// // // //     countries.push(...country)
// // // //     console.log(countries);
// // // // }

// // // // getSuppliers()


// // // // const url = "https://northwind.vercel.app/api"

// // // // Get all info
// // // // function getAllInfo(endpoint) {
// // // //     fetch(`${url}/${endpoint}`)
// // // //         .then((res) => res.json())
// // // //         .then((data) => console.log(data))

// // // // }

// // // // getAllInfo('suppliers')

// // // // Get by id
// // // // function getById(endpoint, id) {
// // // //     fetch(`${url}/${endpoint}/${id}`)
// // // //         .then((res) => res.json())
// // // //         .then((data) => console.log(data))
// // // //         .catch((err) => {
// // // //             console.log(err);
// // // //         })
// // // // }

// // // // getById('suppliers', 8)


// // // //Delete 

// // // // function deleteInfo(id) {
// // // //     fetch(`${url}/suppliers/${id}`, {
// // // //         method: 'DELETE',
// // // //         headers: { 'Content-Type': 'application/json' }
// // // //     })
// // // // }

// // // // deleteInfo(11)


// // // // POST
// // // // function addInfo(info) {
// // // //     fetch(`${url}/suppliers`, {
// // // //         method: "POST",
// // // //         headers: {
// // // //             "Content-Type": "application/json"
// // // //         },
// // // //         body: JSON.stringify(info)
// // // //     })
// // // // }

// // // // addInfo({ uni: 'GWP' })

// // // // const url = "https://jsonplaceholder.typicode.com/users"
// // // const url = "https://northwind.vercel.app/api"



// // // function addUser(info) {
// // //     fetch(`${url}/suppliers/10`, {
// // //         method: "PUT",
// // //         headers: {
// // //             "Content-Type": "application/json"
// // //         },
// // //         body: JSON.stringify(info)
// // //     })
// // // }

// // // addUser({ name: 'Everyone' })

// // // // function deletePost(postId) {
// // // //     fetch(`${url}/${postId}`, {
// // // //         method: 'DELETE',
// // // //         headers: { 'Content-Type': 'application/json' }
// // // //     })
// // // // }
// // // // deletePost(3)

// // // // function getPostById(postId) {
// // // //     fetch(`${url}/${postId}`)
// // // //         .then((res) => res.json())
// // // //         .then((data) => {
// // // //             // let postById = data.find((post) => post.id === postId)
// // // //             console.log(data);
// // // //         })
// // // // }

// // // // getPostById(5)

// // // function getAllPosts(endpoint) {
// // //     fetch(`${url}/${endpoint}`)
// // //         .then((res) => res.json())
// // //         .then((data) => {
// // //             console.log(data);
// // //         })
// // // }

// // // getAllPosts('suppliers')


// import { API_URL } from './api.js'
let API_URL = "https://northwind.vercel.app/api/orders"
const tBody = document.querySelector('#tBody')
const allData = []

function deleteInfo(infoId) {
    fetch(`${API_URL}/${infoId}`, {
        method: 'DELETE',
    })
    getAllInfo()
    console.log('ss');
}

function getAllInfo() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            tBody.innerHTML = ''
            data.forEach((item) => {
                const tr = document.createElement('tr')
                const button = document.createElement('button')
                button.innerHTML = 'Delete'
                button.classList.add('btn')
                button.classList.add('btn-danger')
                const td = document.createElement('td')
                tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.companyName}</td>
                <td>${item.address?.city}</td>
                <td>${item.address?.country}</td>
                <td>${item.address?.phone}</td>
                <td><button onclick=deleteInfo(${item.id})>Delete</button></td>
                `
                tBody.append(tr)
                // td.append(button)
                // tr.append(td)

                // button.addEventListener('click', () => {
                //     deleteInfo(item.id)
                // })
            })
        })
    console.log(allData);
}

getAllInfo()
console.log(allData);





// // 1. Get All info

// // 2. Get info where completed is true

// // 3. Filter info where they userId is 2.

// // 4. Get info by id.

