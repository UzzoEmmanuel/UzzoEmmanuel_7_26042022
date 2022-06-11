const ROOT_URL = 'http://localhost:8000/api'

//--------------------------------------------------------------------------------------------------------------------------------------------
export async function getUser(data) {
  const getUserId = localStorage.getItem('userId')
  const userId = getUserId

  const getToken = localStorage.getItem('token')
  const token = getToken

  return fetch(`${ROOT_URL}/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}

//--------------------------------------------------------------------------------------------------------------------------------------------
export async function getUsers(data) {
  const getToken = localStorage.getItem('token')
  const token = getToken

  return fetch(`${ROOT_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}

//--------------------------------------------------------------------------------------------------------------------------------------------
export async function updateProfil(data) {
  const getUserId = localStorage.getItem('userId')
  const userId = getUserId

  const getToken = localStorage.getItem('token')
  const token = getToken

  return fetch(`${ROOT_URL}/user/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}

//--------------------------------------------------------------------------------------------------------------------------------------------
// export async function updatePicture(data) {
//   return fetch(`${ROOT_URL}/user/:id/picture`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   }).then((data) => data.json())
// }

//--------------------------------------------------------------------------------------------------------------------------------------------
export async function deleteProfil(data) {
  const getUserId = localStorage.getItem('userId')
  const userId = getUserId

  const getToken = localStorage.getItem('token')
  const token = getToken

  return fetch(`${ROOT_URL}/user/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}
