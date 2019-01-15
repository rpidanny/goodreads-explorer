import {
  FETCH_USER_INFO,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  ERROR_OCCURED,
  PRIVATE_ACCOUNT_ERROR,
  NETWORK_ERROR_OCCURED
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

export const getUserData = userId => ({
  type: FETCH_USER_DATA,
  userId
})

export const getUserDataSuccess = userData => ({
  type: FETCH_USER_DATA_SUCCESS,
  userData
})

export const userAccountIsPrivate = err => ({
  type: PRIVATE_ACCOUNT_ERROR,
  err
})

export const networkErrorOccured = err => ({
  type: NETWORK_ERROR_OCCURED,
  err
})
