import { useMatterCancellation } from '../../hooks/useMatterCancellation'
import { actionType } from '../store/types/matterCancellationsTypes'

export const fetchAllMatterCancellations = () => async (dispatch) => {
  const { getMatterCancellation } = useMatterCancellation()

  dispatch({
    type: actionType.LOADING,
  })

  getMatterCancellation().then((res) => {
    console.log(res)

    if (res.statusText != 'OK') throw new Error('La respuesta es NO ok')
    if (res.statusText != 'OK') {
      
    } else {
      // dispatch({
      //   type: actionType.GET_ALL_MATTER_CANCELLATIONS,
      //   // payload: {matterCancellations: res.data},
      //   payload: res.data,
      // })
      // dispatch({
      //   type: actionType.LOADING,
      //   payload: false,
      // })
    }
  })
  // .catch((res) => {
  //   dispatch({
  //     type: actionType.ERROR,
  //     payload: true,
  //   })
  //   console.log(res.message)
  // })
}
