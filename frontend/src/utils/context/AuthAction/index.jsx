const ROOT_URL = 'http://localhost:8000/api'

export async function loginUser(data) {
  return fetch(`${ROOT_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}

export async function signupUser(data) {
  return fetch(`${ROOT_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((data) => data.json())
}

export function logout() {
  localStorage.clear()
  return window.location.reload(false)
}
