import React from 'react'
import Gallery from 'react-photo-gallery'
import BookCover from '../BookCover'

const BookLibrary = (props) => (
  <Gallery
    photos={
      props.books.map((book, idx) => ({
        ...book,
        src: book.small_image_url.replace(/.(s\/)/g, str => {
          const tmp = str.split('s/')
          if (tmp[0] < 58) {
            return tmp[0].concat('l/')
          }
          return str
        }),
        width: 98,
        height: 148,
        alt: book.title,
        key: idx
      }))
    }
    onClick={
      (event, obj) => {
        window.open(obj.photo.link, '_blank')
      }
    }
    direction='column'
    margin={this.props.margin}
    columns={this.props.columns}
    ImageComponent={BookCover}
  />
)

export default BookLibrary
