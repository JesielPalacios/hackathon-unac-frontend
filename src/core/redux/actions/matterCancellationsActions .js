import axios from 'axios'
import { useContext } from 'react'
import { getMatterCancellationsService } from '../../../services/matterCancellation.service'
import { Context } from '../../context/UserContext'
import { actionType } from '../store/types/matterCancellationsTypes'

export const fetchAllMatterCancellations = () => async (dispatch) => {
  const { isAuth } = useContext(Context)

  dispatch({
    type: actionType.LOADING,
  })

  getMatterCancellationsService(isAuth)
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

      // console.log(res.message)
    })
}
