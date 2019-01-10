import * as ActionTypes from '../../utils/constants'

const initialState = {
  userId: null,
  userInfo: null
}

const dashboard = (state = initialState, action = {}) => {
  switch (action.type) {
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

export default dashboard
