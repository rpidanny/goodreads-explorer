import React, { Component } from 'react'

import { Table, Rate, Layout } from 'antd'

import './style.css'

const { Header, Content } = Layout

const columns = [
  {
    title: 'Index',
    dataIndex: 'idx',
    sorter: (a, b) => a.idx - b.idx,
    defaultSortOrder: 'ascending',
    width: '20px'
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
            paddingRight: 10
          }}
        />
        <a
          href={title.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title.text}
        </a>
      </div>
    )
  },
  {
    title: 'Published',
    dataIndex: 'published',
    sorter: (a, b) => a.published - b.published,
    defaultSortOrder: 'ascending',
    width: '100px'
  },
  {
    title: 'Rating',
    dataIndex: 'averageRating',
    render: averageRating => <Rate value={averageRating} />,
    sorter: (a, b) => a.averageRating - b.averageRating,
    defaultSortOrder: 'ascending',
    width: '140px'
  }
]

class BookLibrary extends Component {
  render () {
    const { books, title } = this.props
    console.log(books)
    return (
      <Layout>
        <Header
          className='libraryHeader'
          style={{ position: 'fixed', zIndex: 1, width: '100%' }}
        >
          <h4>{title}</h4>
        </Header>
        <Content
          style={{
            marginTop: 64
          }}
        >
          <div
            className='bookLibrary'
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
              // scroll={{ y: 500 }}
              pagination={{
                position: 'both'
              }}
              bordered
            />
          </div>
        </Content>
      </Layout>
    )
  }
}

export default BookLibrary
