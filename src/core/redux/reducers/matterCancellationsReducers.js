import { actionType } from '../store/types/matterCancellationsTypes'

const initialState = {
  matterCancellations: [],
  error: false,
  loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_MATTER_CANCELLATIONS:
      return {
        ...state,
        matterCancellations: action.payload,
        loading: false,
      }

    case actionType.ERROR:
      return { ...state, error: action.payload, loading: false }

    case actionType.LOADING:
      return { ...state, loading: true }

    default:
      return initialState
  }
}
