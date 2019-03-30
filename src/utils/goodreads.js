import { grApiRoot } from './urls'
import { getGetParams, fetchApi } from './apiHelper'

export function getUserInfo (userId) {
  const url = `${grApiRoot}/user/show?id=${userId}`
  return fetchApi(url, getGetParams())
}

export async function getBooksOnShelf (userId, shelf) {
  const fetchLoop = new Promise(async (resolve, reject) => {
    let page = 1
    let lastpage = false
    let response = {
      books: {
        total: 0,
        book: []
      }
    }
    do {
      const url = `${grApiRoot}/review/list?id=${userId}&shelf=${shelf}&per_page=200&page=${page}`
      const res = await fetchApi(url, getGetParams())
      const { currentpage, numpages, book, total } = res.books

      response.books.total = parseInt(total)
      if (book) {
        response.books.book = response.books.book.concat(book.constructor === Array ? book : [ book ])
      }

      page += 1
      if (currentpage === numpages) {
        lastpage = true
        resolve(response)
      }
    } while (lastpage === false)
  })

  const response = await fetchLoop

  return response
}
