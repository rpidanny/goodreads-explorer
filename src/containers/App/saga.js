import { takeEvery, takeLatest, put, call } from 'redux-saga/effects'
import * as ActionTypes from '../../utils/constants'
import * as Actions from './action'
import * as Goodreads from '../../utils/goodreads'
import { wrapByLoader } from '../../utils/apiHelper'

function * helloWorld () {
  yield put({ type: 'SUCCESS', message: 'Hello World' })
}

const getUserInfo = action =>
  wrapByLoader(function * () {
    try {
      const response = yield call(Goodreads.getUserInfo, action.userId)
      if (!response.error) {
        const userInfo = response
        yield put(Actions.getUserInfoSuccess(userInfo))
      } else {
        yield put(Actions.errorOccured(response))
      }
    } catch (err) {
      yield put(Actions.errorOccured(err))
    }
  })

export default [
  takeEvery(ActionTypes.HELLO_WORLD, helloWorld),
  takeLatest(ActionTypes.FETCH_USER_INFO, getUserInfo)
]
