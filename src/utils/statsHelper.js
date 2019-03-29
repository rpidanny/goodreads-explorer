
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
    averagePages: (totalPages / numBook).toFixed(2),
    averageRating: (totalRating / numBook).toFixed(2)
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

export function getRatingsData (books) {
  const ratings = getHistogram(books, 'average_rating')
  let bins = {
    '0-1': 0,
    '1-2': 0,
    '2-3': 0,
    '3-4': 0,
    '4-5': 0
  }
  ratings.forEach(rating => {
    const key = Math.floor(parseFloat(rating.key))
    switch (key) {
      case 0:
        bins['0-1'] += 1
        break
      case 1:
        bins['1-2'] += 1
        break
      case 2:
        bins['2-3'] += 1
        break
      case 3:
        bins['3-4'] += 1
        break
      case 4:
        bins['4-5'] += 1
        break
      default:
        break
    }
  })

  const keys = Object.keys(bins)
  const data = Object.values(bins).map((item, idx) => {
    let itemKey = keys[idx]
    return {
      key: itemKey,
      value: item
    }
  })

  return data
}

export function getPagesData (books) {
  const ratings = getHistogram(books, 'num_pages')
  let bins = {
    '0-100': 0,
    '100-200': 0,
    '200-300': 0,
    '300-400': 0,
    '400-500': 0,
    '500-600': 0,
    '600-700': 0,
    '700-800': 0,
    '800-900': 0,
    '900-1000': 0,
    '1000-1100': 0,
    '1100-1200': 0,
    '1200+': 0
  }
  ratings.forEach(rating => {
    const key = Math.floor(parseFloat(rating.key) / 100)
    switch (key) {
      case 0:
        bins['0-100'] += 1
        break
      case 1:
        bins['100-200'] += 1
        break
      case 2:
        bins['200-300'] += 1
        break
      case 3:
        bins['300-400'] += 1
        break
      case 4:
        bins['400-500'] += 1
        break
      case 5:
        bins['500-600'] += 1
        break
      case 6:
        bins['600-700'] += 1
        break
      case 7:
        bins['700-800'] += 1
        break
      case 8:
        bins['800-900'] += 1
        break
      case 9:
        bins['900-1000'] += 1
        break
      case 10:
        bins['1000-1100'] += 1
        break
      case 11:
        bins['1100-1200'] += 1
        break
      case 12:
        bins['1200+'] += 1
        break
      default:
        break
    }
  })

  const keys = Object.keys(bins)
  const data = Object.values(bins).map((item, idx) => {
    let itemKey = keys[idx]
    return {
      key: itemKey,
      value: item
    }
  })

  return data
}
