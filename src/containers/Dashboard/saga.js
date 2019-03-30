import { takeLatest, put, call, all } from 'redux-saga/effects'
import * as ActionTypes from '../../utils/constants'
import * as Actions from './action'
import * as Goodreads from '../../utils/goodreads'
import { wrapByLoader } from '../../utils/apiHelper'

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

const getUserData = action =>
  wrapByLoader(function * () {
    try {
      const cachedData = JSON.parse(window.localStorage.getItem(action.userId))

      if (cachedData && ((Date.now() - cachedData.timestamp) < 3600000)) {
        yield put(Actions.getUserDataSuccess(cachedData.data))
      } else {
        const response = yield call(Goodreads.getUserInfo, action.userId)
        if (response.user && !response.error) {
          const userData = response
          if (userData.user.user_shelves) {
            const shelves = userData.user.user_shelves.user_shelf.map(shelf => shelf.name)
            const bookOnShelves = yield all(
              shelves.map(
                shelf => call(Goodreads.getBooksOnShelf, action.userId, shelf)
              )
            )
            userData.user.user_shelves = bookOnShelves.map((shelf, idx) => ({
              name: shelves[idx],
              books: shelf.books ? shelf.books : { book: [] }
            }))
            try {
              window.localStorage.setItem(
                action.userId,
                JSON.stringify({
                  data: userData,
                  timestamp: Date.now()
                })
              )
            } catch (err) {
              console.log(err)
            }
            yield put(Actions.getUserDataSuccess(userData))
          } else {
            yield put(Actions.userAccountIsPrivate({
              title: 'Private Account',
              message: `Sorry ${userData.user.name}, your account is private. Can't fetch your data.`
            }))
            yield put(Actions.getUserDataSuccess({
              user: {
                ...userData.user,
                user_shelves: []
              }
            }))
          }
        } else {
          yield put(Actions.networkErrorOccured({
            title: 'Network Error',
            message: response.message
          }))
        }
      }
    } catch (err) {
      yield put(Actions.errorOccured(err))
    }
  })

export default [
  takeLatest(ActionTypes.FETCH_USER_INFO, getUserInfo),
  takeLatest(ActionTypes.FETCH_USER_DATA, getUserData)
]
