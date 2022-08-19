
export default function login({ email, password }) {
  console.log(email, password)
  return fetch(`${process.env.API_HOST}/${process.env.ENDPOINT}`, {
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
      const { token } = res
      console.log(res)
      return token
    })
}
