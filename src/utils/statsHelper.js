
const sum = (a) => a.reduce((a, b) => a + b, 0)

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

export function getStats (books) {
  const numPages = books.map(book => {
    return typeof book.num_pages === 'string' ? parseInt(book.num_pages) : 0
  })
  const ratings = books.map(book => {
    return typeof book.average_rating === 'string' ? parseFloat(book.average_rating) : 0.0
  })

  const numBook = books.length
  const totalPages = sum(numPages)
  const totalRating = sum(ratings)

  return {
    totalBooks: books.length,
    totalPages,
    averagePages: totalPages / numBook,
    averageRating: totalRating / numBook
  }
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
