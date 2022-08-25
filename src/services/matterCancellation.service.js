import axios from 'axios'

export async function createMatterCancellationService({
  subjectToCancel,
  teacher,
  lastDateOfClassAttendance,
  studentSignature,
  token,
}) {
  const formData = new FormData()
  formData.append('subjectToCancel', subjectToCancel)
  formData.append('teacher', teacher)
  formData.append('lastDateOfClassAttendance', lastDateOfClassAttendance)
  formData.append('file', studentSignature)

  // return fetch('http://localhost:3001/api/matter-cancellations', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: token,
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   body: formData,
  // }).then((res) => {
  //   if (!res.ok) throw new Error('La respuesta es NO ok')
  //   return res.json()
  // })

  return await axios
    .post('http://localhost:3001/api/matter-cancellations', formData, {
      // .post('http://localhost:3001/uploads', formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      if (!res.ok) throw new Error('La respuesta es NO ok')
      return res.json()
    })
}

export async function getMatterCancellationsService({ token }) {
  return await axios
    .get('http://localhost:3001/api/matter-cancellations', {
      headers: {
        Authorization: token,
      },
    })
    .then((resp) => {
      // console.log(resp)
      // if (resp.statusText != 'OK') throw new Error('La respuesta es NO ok')
      return resp
    })
}
