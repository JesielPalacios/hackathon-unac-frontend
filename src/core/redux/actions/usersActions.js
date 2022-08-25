import { actionType } from '../store/types/usersTypes'
import axios from 'axios'

export const fetchAllUsers = () => async (dispatch) => {
  dispatch({
    type: actionType.LOADING
  })

  await axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((users) => {
      dispatch({
        type: actionType.GET_ALL_USERS,
        payload: users.data
      })
    })
    .catch((resp) => {
      dispatch({
        type: actionType.ERROR,
        payload: true
      })
      console.log(resp.message)
    })
}
