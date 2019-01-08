/* global fetch */
import { put } from 'redux-saga/effects'
import * as ActionTypes from './constants'

export const getGetParams = () => ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const handleResponse = (response) => {
  if (response.status !== 200) {
    const error = {
      error: {
        code: response.status,
        message: 'Fetch error'
      },
      status: response.status,
      statusText: response.statusText
    }
    return Promise.reject(error)
  }
  return response.json().then(json => json)
}

export const fetchApi = (url, params) =>
  fetch(url)
    .then(handleResponse)
    .catch(err => err)

export function * wrapByLoader (fn) {
  yield put({ type: ActionTypes.FETCH_START })
  yield fn()
  yield put({ type: ActionTypes.FETCH_END })
}
