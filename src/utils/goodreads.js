import { grApiRoot } from './urls'
import { getGetParams, fetchApi } from './apiHelper'

export function getUserInfo (userId) {
  const url = `${grApiRoot}/user/show?id=${userId}`
  return fetchApi(url, getGetParams())
}
