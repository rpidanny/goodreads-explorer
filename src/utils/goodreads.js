import { grApiRoot } from './urls'
import { getGetParams, fetchApi } from './apiHelper'

export function getUserInfo (userId) {
  const url = `${grApiRoot}/user/show?id=${userId}`
  return fetchApi(url, getGetParams())
}

export function getBooksOnShelf (userId, shelf) {
  const url = `${grApiRoot}/review/list?id=${userId}&shelf=${shelf}&per_page=200`
  return fetchApi(url, getGetParams())
}
