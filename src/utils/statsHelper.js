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
              },
              author: book.authors.author.name
            }
          )
        })
      }
    }
  })

  return books
}

export function getHistogram (books, key, keyProcessor = null) {
  const bins = {}

  books.forEach(book => {
    let itemKey = book[key]
    if (keyProcessor) {
      itemKey = keyProcessor(itemKey)
    }

    if (!bins[itemKey]) {
      bins[itemKey] = [
        book
      ]
      // bins[book.published] = 1
    } else {
      bins[itemKey].push(book)
      // bins[book.published] += 1
    }
  })

  const keys = Object.keys(bins)
  const data = Object.values(bins).map((item, idx) => {
    let itemKey = keys[idx]
    return {
      key: itemKey,
      value: item.length
    }
  })

  return data
}
