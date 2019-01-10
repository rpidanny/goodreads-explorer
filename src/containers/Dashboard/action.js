import {
  FETCH_USER_INFO,
  FETCH_USER_INFO_SUCCESS,
  ERROR_OCCURED
} from '../../utils/constants'

export const errorOccured = err => ({
  type: ERROR_OCCURED,
  err
})

export const getUserInfo = userId => ({
  type: FETCH_USER_INFO,
  userId
})

export const getUserInfoSuccess = userInfo => ({
  type: FETCH_USER_INFO_SUCCESS,
  userInfo
})
