import axios from 'axios'
import { useContext } from 'react'
import { Context } from '../../context/UserContext'
import { actionType } from '../store/types/matterCancellationsTypes'

export const fetchAllMatterCancellations = () => async (dispatch) => {
  const { isAuth } = useContext(Context)

  dispatch({
    type: actionType.LOADING,
  })

  await axios
    .get('http://localhost:3001/api/matter-cancellations', {
      headers: {
        Authorization: isAuth,
      },
    })
    .then((res) => {
      // console.log(res)
      if (res) {
        dispatch({
          type: actionType.GET_ALL_MATTER_CANCELLATIONS,
          payload: res.data,
        })
      }
    })
    .catch(() => {
      dispatch({
        type: actionType.ERROR,
        payload: true,
      })

      console.log(res.message)
    })
}
