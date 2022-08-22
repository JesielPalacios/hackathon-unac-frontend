export default function login({ email, password }) {
  return fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (!res.ok) throw new Error('La respuesta es NO ok')
      return res.json()
    })
    .then((res) => {
      const { accessToken } = res
      return accessToken
    })
}
