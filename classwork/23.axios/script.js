const BASE_URL = 'http://localhost:8000/users'
const BASE_URL2 = 'https://jsonplaceholder.typicode.com/posts'

// //Get all users
// // const getAllUsers = async () => {
// //     try {
// //         const res = await axios.get(`${BASE_URL}?name=How is it going`)
// //         console.log(res.data);
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }
// // getAllUsers()
// const getAllUsers = async () => {
//     try {
//         const res = await axios.get(BASE_URL, {
//             params: {
//                 name: 'How is it going'
//             }
//         })
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()


// //Get a user by id 
// const getUser = async (userId) => {
//     try {
//         const res = await axios.get(`${BASE_URL}/${userId}`)
//         const data = res.data
//         console.log(data);
//     } catch (error) {
//         console.log('err', error);
//     }
// }
// getUser(1)

// const user = {
//     id: '6',
//     name: 'Ulfat Zakirli',
//     email: 'ulfat@gmail.com'
// }

// //Post a user
// const createUser = async (user) => {
//     try {
//         await axios.post(BASE_URL, user)
//     } catch (error) {
//         console.log(error);
//     }
// }
// createUser(user)

// const updatedUser = {
//     "name": "How is it going",
//     "usertype": "is Admin"
// }

// const updateBtn = document.querySelector('#updateBtn')
// const deleteBtn = document.querySelector('#deleteBtn')

// //PUT/PATCH a user
// const updateUser = async (userId) => {
//     try {
//         await axios.patch(`${BASE_URL}/${userId}`, updatedUser)
//     } catch (error) {
//         console.log(error);
//     }
// }

// updateBtn.addEventListener('click', () => {
//     updateUser(10)
// })

// //DELETE a user
// const deleteUser = async (userId) => {
//     try {
//         await axios.delete(`${BASE_URL}/${userId}`)
//     } catch (error) {
//         console.log(error);
//     }
// }

// deleteBtn.addEventListener('click', () => {
//     deleteUser(1)
// })



// const getAllUsers2 = async () => {
//     axios.get(`${BASE_URL}?name=How is it going`)
//         .then((res) => console.log(res.data))
//         .catch((err) => console.log(err))

// }

// getAllUsers2()


const getAllAPI = () => {
    axios.all([BASE_URL, BASE_URL2]).then(
        axios.spread((...res) => {
            const firstRes = res[0]
            const secondRes = res[1]
            console.log(firstRes, secondRes);
        })
    )

}

getAllAPI()