import * as ActionTypes from '../../utils/constants'

const initialState = {
  isLoading: 0
}

const app = (state = initialState, action) => {
  switch (ActionTypes.HELLO_WORLD) {
    case ActionTypes.HELLO_WORLD:
      return {
        ...state,
        HELLO_WORLD: true
      }
    case ActionTypes.FETCH_START: {
      return { ...state, isLoading: state.isLoading + 1 }
    }
    case ActionTypes.FETCH_END: {
      return { ...state, isLoading: state.isLoading - 1 }
    }
    default:
      return state
  }
}

export default app
