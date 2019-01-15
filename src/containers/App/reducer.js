import * as ActionTypes from '../../utils/constants'

const initialState = {
  isLoading: 0,
  error: null
}

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_START: {
      return { ...state, isLoading: state.isLoading + 1 }
    }
    case ActionTypes.FETCH_END: {
      return { ...state, isLoading: state.isLoading - 1 }
    }
    case ActionTypes.ERROR_OCCURED: {
      const { err } = action
      return {
        ...state,
        error: {
          title: err.name,
          message: err.message
        }
      }
    }
    case ActionTypes.NETWORK_ERROR_OCCURED: {
      const { err } = action
      return { ...state, error: err }
    }
    case ActionTypes.PRIVATE_ACCOUNT_ERROR: {
      const { err } = action
      return { ...state, error: err }
    }
    default: {
      return state
    }
  }
}

export default app
