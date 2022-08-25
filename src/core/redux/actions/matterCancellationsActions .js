import { useMatterCancellation } from '../../hooks/useMatterCancellation'
import { actionType } from '../store/types/matterCancellationsTypes'

export const fetchAllMatterCancellations = () => async (dispatch) => {
  const { getMatterCancellation } = useMatterCancellation()

  dispatch({
    type: actionType.LOADING,
  })

  getMatterCancellation()
    .then((res) => {
      dispatch({
        type: actionType.GET_ALL_MATTER_CANCELLATIONS,
        payload: res.data,
      })
    })
    .catch((res) => {
      dispatch({
        type: actionType.ERROR,
        payload: true,
      })

      console.log(res.message)
    })
}
