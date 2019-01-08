import { takeEvery, put } from 'redux-saga/effects'
import * as ActionTypes from '../../utils/constants'

function * helloWorld () {
  yield put({ type: 'SUCCESS', message: 'Hello World' })
}

export default [
  takeEvery(ActionTypes.HELLO_WORLD, helloWorld)
]
