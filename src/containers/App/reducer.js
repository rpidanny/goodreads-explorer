import * as ActionTypes from '../../utils/constants'

const initialState = {
  isLoading: 0,
  userId: null,
  userInfo: null
}

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_START: {
      return { ...state, isLoading: state.isLoading + 1 }
    }
    case ActionTypes.FETCH_END: {
      return { ...state, isLoading: state.isLoading - 1 }
    }
    case ActionTypes.FETCH_USER_INFO: {
      const { userId } = action
      return { ...state, userId }
    }
    case ActionTypes.FETCH_USER_INFO_SUCCESS: {
      const { userInfo } = action
      return { ...state, userInfo: userInfo.user }
    }
    default: {
      return state
    }
  }
}

export default app
