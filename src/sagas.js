import { all } from 'redux-saga/effects'
import appSaga from './containers/App/saga'
import dashboardSaga from './containers/Dashboard/saga'

function * rootSaga () {
  yield all([
    ...appSaga,
    ...dashboardSaga
  ])
}

export default rootSaga
