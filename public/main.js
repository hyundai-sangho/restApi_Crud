const sendDataButton = document.querySelector('#sendDataButton')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const age = document.querySelector('#age')
const deleteUser = document.querySelector('#deleteUser')
const firstNameUpdate = document.querySelector('#firstNameUpdate')
const lastNameUpdate = document.querySelector('#lastNameUpdate')
const updateUser = document.querySelector('#updateUser')
const detailUser = document.querySelector('#detailUser')

sendDataButton.addEventListener('click', () => {
  let url = 'http://localhost:5000/users'
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
    }),
  }).then((response) => console.log(response))
})

deleteUser.addEventListener('click', (e) => {
  e.preventDefault()
  let id = deleteUser.dataset.id
  let url = `http://localhost:5000/users/${id}`

  console.log(url)

  fetch(url, {
    method: 'DELETE',
  }).catch((error) => console.log(error))
})

updateUser.addEventListener('click', (e) => {
  e.preventDefault()

  let id = deleteUser.dataset.id
  let url = `http://localhost:5000/users/${id}`

  fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstNameUpdate.value,
      lastName: lastNameUpdate.value,
    }),
  }).then((response) => console.log(response))
})

detailUser.addEventListener('click', (e) => {
  e.preventDefault()

  let id = detailUser.dataset.id
  let url = `http://localhost:5000/users/${id}`

  fetch(url).then((response) => console.log(response))
})
