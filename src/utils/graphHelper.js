import memoize from 'memoize-one'

const minifyString = text => {
  return text.split(' ').slice(0, 3).map(word => word.charAt(0).toUpperCase()).join('')
}

export const getGraphData = memoize((userData, shelves) => {
  let books = []
  let bookNodes = {}
  let authorNodes = {}
  let publisherNodes = {}
  let nodes = []
  let links = []

  const bookShelves = userData.user_shelves

  // nodes.push({
  //   text: userData.name,
  //   id: userData.id,
  //   img: userData.image_url,
  //   type: 'USER',
  //   color: '#336B87',
  //   radius: 55,
  //   style: {
  //     r: 55,
  //     stroke: '#375E97',
  //     strokeWidth: '3px'
  //   }
  // })

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

  books.forEach(book => {
    const { author } = book.authors

    if (!bookNodes[book.id.$t]) {
      // Create Book Nodes
      bookNodes[book.id.$t] = {
        id: book.id.$t,
        text: book.title,
        type: 'BOOK',
        img: book.image_url,
        color: '#336B87',
        radius: 35,
        style: {
          r: 35,
          stroke: '#375E97',
          strokeWidth: '3px'
        }
      }
      // Create Author Nodes
      if (!authorNodes[author.id]) {
        authorNodes[author.id] = {
          id: author.id,
          text: author.name,
          type: 'AUTHOR',
          img: author.image_url.$t,
          color: '#FB6542',
          radius: 35,
          style: {
            r: 35,
            stroke: '#FB6542',
            strokeWidth: '3px'
          }
        }
      }
      // Create Publisher Nodes
      if (!publisherNodes[book.publisher]) {
        publisherNodes[book.publisher] = {
          id: typeof book.publisher === 'string' ? book.publisher : 'Self Published',
          text: typeof book.publisher === 'string' ? book.publisher : 'Self Published',
          type: 'PUBLISHER',
          color: '#DDA487',
          radius: 35,
          style: {
            r: 35,
            stroke: '#7D4427',
            strokeWidth: '3px'
          }
        }
      }
      // Create Authoer --> Book relationship
      links.push({
        source: author.id,
        sourceType: 'AUTHOR',
        target: book.id.$t,
        targetType: 'BOOK',
        type: 'AUTHOR_OF',
        property: {
          publicationYear: book.publication_year,
          publicationMonth: book.publication_month,
          publicationDay: book.publication_day
        }
      })
      // Create Book --> Publisher relationship
      links.push({
        source: book.id.$t,
        sourceType: 'BOOK',
        target: typeof book.publisher === 'string' ? book.publisher : 'Self Published',
        targetType: 'PUBLISHER',
        type: 'PUBLISHED_BY',
        property: {
          publicationYear: book.publication_year,
          publicationMonth: book.publication_month,
          publicationDay: book.publication_day
        }
      })

      // Create Author --> Publisher relationship
      links.push({
        source: author.id,
        sourceType: 'AUTHOR',
        target: book.publisher,
        targetType: 'PUBLISHER',
        type: 'WORKS_WITH',
        property: {
          publicationYear: book.publication_year,
          publicationMonth: book.publication_month,
          publicationDay: book.publication_day
        }
      })
    }
  })

  // Collect all nodes
  nodes = Object.values(bookNodes)
    .concat(Object.values(authorNodes))
    .concat(Object.values(publisherNodes))
    .map((node, idx) => ({
      ...node,
      shortText: minifyString(node.text),
      textStyle: {
        fontSize: 15,
        fill: '#fff',
        strokeWidth: '2px',
        fontWeight: 'normal'
      }
    }))

  return {
    nodes,
    links: links.map(link => ({
      ...link,
      strength: 0.5,
      distance: 350,
      id: `${link.source}-${link.type}-${link.target}`,
      style: {
        strokeWidth: 1.5,
        fill: 'none',
        stroke: 'rgba(50, 50, 50, 0.2)'
      }
    }))
  }
})
