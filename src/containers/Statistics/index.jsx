import React, { Component } from 'react'

import { Button, Popover, Row, Col, Divider, Statistic, Card } from 'antd'
import randomColor from 'randomcolor'

import MultiCheckBox from '../../components/MultiCheckBox'
import Histogram from '../../components/Histogram'
import TagCloud from '../../components/TagCloud'
import PieChart from '../../components/PieChart'
import ScatterPlot from '../../components/ScatterPlot'

import {
  getBooksList,
  getHistogram,
  getStats,
  getRatingsData,
  getPagesData,
  getPublishedMonthData,
  getMonthRatingData,
  getRatingsCorrelationData
} from '../../utils/statsHelper'

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

    const publishedYearHist = getHistogram(books, 'published',
      format => typeof format === 'string' ? format : 'Unknown'
    )
    const authorHist = getHistogram(books, 'author')
    const formatHist = getHistogram(books, 'format',
      format => typeof format === 'string' ? format : 'Unknown'
    )
    const ratingHist = getRatingsData(books)
    const numPagesHist = getPagesData(books)
    const publishedMonthHist = getPublishedMonthData(books)

    const formatDistribution = formatHist.map(format => ({
      id: format.key,
      label: format.key,
      value: format.value,
      color: randomColor()
    }))

    const pubMonthRatingData = getMonthRatingData(books)
    const ratingsCorrelationData = getRatingsCorrelationData(books)

    console.log('Books: ', books)
    console.log('YearHist: ', publishedYearHist)
    console.log('authorHist: ', authorHist)
    console.log('ratingHist', ratingHist)
    console.log('numPagesHist', numPagesHist)
    console.log('Shelves', shelvesDistribution)
    console.log('formatDistribution', formatHist)

    console.log('stats', stats)

    return (
      <div className='statistics'>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6} lg={4} xl={4}>
            <Card>
              <Statistic title='Total Shelves' value={shelves.length} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={4}>
            <Card>
              <Statistic title='Total Books' value={stats.totalBooks} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={4}>
            <Card>
              <Statistic title='Total Pages' value={stats.totalPages} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={4}>
            <Card>
              <Statistic title='Average Pages' value={stats.averagePages} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6} lg={4} xl={4}>
            <Card>
              <Statistic title='Average Rating' value={stats.averageRating} />
            </Card>
          </Col>
        </Row>

        <Divider />
        <Row>
          <Card title='Authors'>
            <TagCloud data={authorHist} />
          </Card>
        </Row>
        <Divider />

        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title='Shelves' >
              <PieChart data={shelvesDistribution} colors='accent' />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title='Book Formats' >
              <PieChart data={formatDistribution} />
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16} >
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title='Published Month Vs Average Rating' >
              <ScatterPlot
                data={pubMonthRatingData}
                xLabel='Published Month'
                yLabel='Average Rating'
              />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title='Author Rating Vs Book Rating' >
              <ScatterPlot
                data={ratingsCorrelationData}
                xLabel='Author Rating'
                yLabel='Book Rating'
                colors='pink_yellowGreen'
              />
            </Card>
          </Col>
        </Row>

        <Divider dashed />
        <Row>
          <Card title='Histogram of Books by Number of Pages' >
            <Histogram
              data={numPagesHist}
              xLabel='Number of Pages'
              yLabel='Number of Books'
            />
          </Card>
        </Row>
        <Divider dashed />

        <Row>
          <Card title='Histogram of Books by Published Month' >
            <Histogram
              data={publishedMonthHist}
              xLabel='Published Month'
              yLabel='Number of Books'
            />
          </Card>
        </Row>
        <Divider dashed />
        <Row>
          <Card title='Histogram of Books by Published Year' >
            <Histogram
              data={publishedYearHist}
              xLabel='Published Year'
              yLabel='Number of Books'
            />
          </Card>
        </Row>
        <Divider dashed />

        <Row>
          <Card title='Histogram of Books by Average Rating' >
            <Histogram
              data={ratingHist}
              xLabel='Average Rating'
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
