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
