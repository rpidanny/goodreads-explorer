export function getBooksList (userData, shelves) {
  let books = []

  const bookShelves = userData.user_shelves

  bookShelves.forEach(shelf => {
    if (shelves.indexOf(shelf.name) > -1) {
      if (shelf.books.book) {
        const tmpList = shelf.books.book.length ? shelf.books.book : [ shelf.books.book ]
        tmpList.forEach(book => {
          books.push(
            {
              ...book,
              property: {
                shelf: shelf.name
              }
            }
          )
        })
      }
    }
  })

  return books
}

export function getHistogram (books, key) {
  const bins = {}

  books.forEach(book => {
    if (!bins[book[key]]) {
      bins[book[key]] = [
        book
      ]
      // bins[book.published] = 1
    } else {
      bins[book[key]].push(book)
      // bins[book.published] += 1
    }
  })

  const keys = Object.keys(bins)
  const data = Object.values(bins).map((year, idx) => ({
    year: keys[idx],
    value: year.length
  }))

  return data
}
