import { all } from 'redux-saga/effects'
import appSaga from './containers/App/saga'

function * rootSaga () {
  yield all([
    ...appSaga
  ])
}

export default rootSaga
