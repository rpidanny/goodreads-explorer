import React, { Component } from 'react'

import { Radio, Table, Rate } from 'antd'

import BookShelf from '../../components/BookShelf'

import './style.css'

const columns = [
  {
    title: 'Index',
    dataIndex: 'idx',
    sorter: (a, b) => a.dataIndex - b.dataIndex,
    defaultSortOrder: 'ascending'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    render: title => (
      <div>
        <img
          src={title.img}
          alt={title.text}
          style={{
            padding: 4
          }}
        />
        <a href={title.link} >
          {title.text}
        </a>
      </div>
    )
  },
  {
    title: 'Published',
    dataIndex: 'published',
    sorter: (a, b) => a.published - b.published,
    defaultSortOrder: 'ascending'
  },
  {
    title: 'Rating',
    dataIndex: 'averageRating',
    render: averageRating => <Rate value={averageRating} />,
    sorter: (a, b) => a.averageRating - b.averageRating,
    defaultSortOrder: 'ascending'
  }
]

class BookLibrary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mode: 'table'
    }

    this.handleModeChange = this.handleModeChange.bind(this)
  }

  handleModeChange (mode) {
    this.setState({
      mode
    })
  }

  render () {
    const { mode } = this.state
    const { books } = this.props
    console.log(books)
    return (
      <div
        className='bookLibrary'
      >
        <Radio.Group
          defaultValue={this.state.mode}
          buttonStyle='outline'
          onChange={e => this.handleModeChange(e.target.value)}
        >
          <Radio.Button value='image'>Image</Radio.Button>
          <Radio.Button value='table'>Table</Radio.Button>
        </Radio.Group>
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
          }}
        >
          {
            mode === 'image'
              ? (
                <BookShelf
                  books={this.props.books}
                  margin={0}
                  columns={7}
                />
              )
              : (
                <div
                  className='libraryTable'
                >
                  <Table
                    columns={columns}
                    dataSource={
                      books.map((book, idx) => ({
                        key: idx,
                        idx: idx + 1,
                        published: parseInt(book.published),
                        title: {
                          text: book.title,
                          link: book.link,
                          img: book.small_image_url
                        },
                        averageRating: parseFloat(book.average_rating)
                      }))
                    }
                  />
                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default BookLibrary
