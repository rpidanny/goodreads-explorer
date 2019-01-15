import * as ActionTypes from '../../utils/constants'

const initialState = {
  isLoading: 0
}

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_START: {
      return { ...state, isLoading: state.isLoading + 1 }
    }
    case ActionTypes.FETCH_END: {
      return { ...state, isLoading: state.isLoading - 1 }
    }
    default: {
      return state
    }
  }
}

export default app
