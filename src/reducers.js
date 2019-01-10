import { combineReducers } from 'redux'
import app from './containers/App/reducer'
import dashboard from './containers/Dashboard/reducer'

const rootReducer = combineReducers({ app, dashboard })

export default rootReducer
