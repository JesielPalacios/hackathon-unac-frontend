import axios from 'axios'

export function createMatterCancellationService({
  subjectToCancel,
  teacher,
  lastDateOfClassAttendance,
  studentSignature,
  token,
}) {

  studentSignature = new FormData()
  // console.log(studentSignature)
  return fetch('http://localhost:3001/api/matter-cancellations', {
  // return fetch('http://localhost:8080/upload', {
    method: 'POST',
    headers: {
      Authorization: token,
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD',
      // boundary: '=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD',
      // 'content-type': 'application/x-www-form-urlencoded',

      // 'content-Type': `multipart/form-data; boundary=${studentSignature._boundary}`,
      // 'Content-Type': `application/x-www-form-urlencoded; boundary=${studentSignature._boundary}`,
    },
    // boundary: '=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD',

    body: JSON.stringify({
      // subjectToCancel,
      // teacher,
      // lastDateOfClassAttendance,
      studentSignature,
    }),
  }).then((res) => {
    if (!res.ok) throw new Error('La respuesta es NO ok')
    return res.json()
  })

  // const options = {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //   data: qs.stringify(data),
  //   url,
  // }

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //       // 'Content-Type': `multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD`,
  //     },
  //     // data: JSON.stringify(studentSignature),
  //     data: studentSignature,
  //     // url,
  //     url: 'http://localhost:8080/upload',
  //   }

  // return axios(options)
  // .then((res) => {
  //   if (!res.ok) throw new Error('La respuesta es NO ok')
  //   return res.json()
  // })

  // return axios
  //   .post(
  //     'http://localhost:8080/upload',
  //     {
  //       studentSignature,
  //     },
  //     // {
  //     //   subjectToCancel,
  //     //   teacher,
  //     //   lastDateOfClassAttendance,
  //     //   studentSignature,
  //     //   token,
  //     // },
  //     {
  //       headers: {
  //         // accept: 'application/json',
  //         // 'Accept-Language': 'en-US,en;q=0.8',
// 
  //         // 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  //         // 'Content-Type': `multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD`,
// 
  //         //     // 'Content-Type': 'application/json',
  //         // 'Content-Type': 'multipart/form-data',
// 
  //         // 'Content-Type': `application/x-www-form-urlencoded; boundary=${studentSignature._boundary}`,
  //         // 'Content-Type': `multipart/form-data; boundary=${studentSignature._boundary}`,
// 
  //         //     // 'content-type': 'application/x-www-form-urlencoded',
  //         'Content-Type': `application/x-www-form-urlencoded; boundary=${studentSignature._boundary}`,
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     if (!res.ok) throw new Error('La respuesta es NO ok')
  //     return res.json()
  //   })
}
