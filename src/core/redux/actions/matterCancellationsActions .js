import axios from 'axios'
import { useMatterCancellation } from '../../hooks/useMatterCancellation'
import { actionType } from '../store/types/matterCancellationsTypes'

export const fetchAllMatterCancellations = () => async (dispatch) => {
  const { token } = useMatterCancellation()

  dispatch({
    type: actionType.LOADING,
  })

  await axios
    .get('http://localhost:3001/api/matter-cancellations', {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res)
      if (res) {
        dispatch({
          type: actionType.GET_ALL_MATTER_CANCELLATIONS,
          payload: res?.data,
        })
      }
    })
    .catch((res) => {
      dispatch({
        type: actionType.ERROR,
        payload: true,
      })

      // console.log(res.message)
    })
}
