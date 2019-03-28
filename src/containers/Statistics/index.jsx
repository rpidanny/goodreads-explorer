import React, { Component } from 'react'

import { Button, Popover, Row, Col, Divider, Statistic, Card } from 'antd'
import randomColor from 'randomcolor'

import MultiCheckBox from '../../components/MultiCheckBox'
import Histogram from '../../components/Histogram'
import TagCloud from '../../components/TagCloud'
import PieChart from '../../components/PieChart'

import { getBooksList, getHistogram, getStats } from '../../utils/statsHelper'

import './style.css'

class StatisticsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shelvesSelectPopover: false,
      books: [],
      shelves: [],
      selectedShelves: []
    }

    this.hideShelvesSelect = this.hideShelvesSelect.bind(this)
    this.handleShelvesChange = this.handleShelvesChange.bind(this)
    this.handleShelvesSelectVisibleChange = this.handleShelvesSelectVisibleChange.bind(
      this
    )
  }

  componentDidMount () {
    const shelves = this.props.userData.user_shelves.map(shelf => {
      if (shelf.books.book) {
        return {
          name: shelf.name,
          bookCount: shelf.books.book.length ? shelf.books.book.length : 1
        }
      }
      return {
        name: shelf.name,
        bookCount: 0
      }
    })
    const selectedShelves = shelves.length > 0 ? [shelves[0].name] : []

    const books = getBooksList(this.props.userData, selectedShelves)

    this.setState({
      shelves,
      selectedShelves,
      books
    })
  }

  hideShelvesSelect () {
    this.setState({ shelvesSelectPopover: false })
  }

  handleShelvesSelectVisibleChange (visible) {
    this.setState({ shelvesSelectPopover: visible })
  }

  handleShelvesChange (selectedShelves) {
    const books = getBooksList(this.props.userData, selectedShelves)

    this.setState({
      books,
      selectedShelves
    })
  }

  render () {
    const {
      books,
      shelvesSelectPopover,
      shelves,
      selectedShelves
    } = this.state

    const { user_shelves } = this.props.userData

    const shelvesDistribution = user_shelves.map(shelf => ({
      id: shelf.name,
      label: shelf.name,
      value: parseInt(shelf.books.end),
      color: randomColor()
    }))

    const stats = getStats(books)

    const publishedYearHist = getHistogram(books, 'published')
    const authorHist = getHistogram(books, 'author')
    const ratingHist = getHistogram(books, 'average_rating')
      .sort((a, b) => (parseFloat(a.key) > parseFloat(b.key)) ? 1 : -1)
    const numPagesHist = getHistogram(books, 'num_pages')
      .sort((a, b) => (parseInt(a.key) > parseInt(b.key)) ? 1 : -1)

    console.log('Books: ', books)
    console.log('YearHist: ', publishedYearHist)
    console.log('authorHist: ', authorHist)
    console.log('ratingHist', ratingHist)
    console.log('numPagesHist', numPagesHist)
    console.log('Shelves', shelvesDistribution)

    console.log('stats', stats)

    return (
      <div className='statistics'>
        <Row gutter={16}>
          <Col span={4} />
          <Col span={4}>
            <Card>
              <Statistic title='Total Books' value={stats.totalBooks} />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic title='Total Pages' value={stats.totalPages} />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic title='Average Pages' value={stats.averagePages} />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic title='Average Rating' value={stats.averageRating} />
            </Card>
          </Col>
          <Col span={4} />
        </Row>

        <Divider />
        <Row>
          <Card>
            <h3 style={{ marginBottom: 16, padding: 10 }}>Authors</h3>
            <TagCloud data={authorHist} />
          </Card>
        </Row>
        <Divider />

        <Row>
          <Card>
            <h3 style={{ marginBottom: 16, padding: 10 }}>Shelves</h3>
            <PieChart data={shelvesDistribution} />
          </Card>
        </Row>
        <Divider dashed />

        <Row>
          <Card>
            <h3 style={{ marginBottom: 16, padding: 10 }}>Histogram of Books by Published Year</h3>
            <Histogram
              data={publishedYearHist}
              xLabel='Published Year'
              yLabel='Number of Books'
            />
          </Card>
        </Row>
        <Divider dashed />
        <Row>
          <Card>
            <h3 style={{ marginBottom: 16, padding: 10 }}>Histogram of Books by Average Rating</h3>
            <Histogram
              data={ratingHist}
              xLabel='Average Rating'
              yLabel='Number of Books'
            />
          </Card>
        </Row>
        <Divider dashed />
        <Row>
          <Card>
            <h3 style={{ marginBottom: 16, padding: 10 }}>Histogram of Books by Number of Pages</h3>
            <Histogram
              data={numPagesHist}
              xLabel='Number of Pages'
              yLabel='Number of Books'
            />
          </Card>
        </Row>
        <Divider dashed />

        <Popover
          content={
            <MultiCheckBox
              onChange={this.handleShelvesChange}
              options={shelves.map(shelf => shelf.name)}
              defaultCheckedList={selectedShelves}
              optionLabel={shelves.map(
                shelf => `${shelf.name} (${shelf.bookCount})`
              )}
              disable={shelves.map(shelf => shelf.bookCount === 0)}
              className='graphPopover'
            />
          }
          title={`Shelves (${shelves.length})`}
          trigger='click'
          visible={shelvesSelectPopover}
          onVisibleChange={this.handleShelvesSelectVisibleChange}
          placement='bottomLeft'
        >
          <Button
            icon='check-square'
            style={{
              position: 'fixed',
              top: 20,
              right: 60
            }}
          >
            Select Shelves
          </Button>
        </Popover>
      </div>
    )
  }
}

export default StatisticsContainer
