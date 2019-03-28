import React, { Component } from 'react'

import { Button, Popover, Row, Divider } from 'antd'

import MultiCheckBox from '../../components/MultiCheckBox'
import Histogram from '../../components/Histogram'

import { getBooksList, getPublishedYearHist } from '../../utils/statsHelper'

import './style.css'

class Statistics extends Component {
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

    const publishedYearHist = getPublishedYearHist(books)
    const pyKeys = Object.keys(publishedYearHist)
    const pyData = Object.values(publishedYearHist).map((year, idx) => ({
      year: pyKeys[idx],
      value: year.length
    }))

    console.log('Books: ', books)
    console.log('YearHist: ', publishedYearHist)
    console.log('YearData: ', pyData)
    console.log('YearKeys: ', pyKeys)

    return (
      <div className='statistics'>
        <Row>
          <h3 style={{ marginBottom: 16 }}>Histogram of Books by Published Year</h3>
          <Histogram
            data={pyData}
            xLabel='Published Year'
            yLabel='Number of Books'
          />
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

export default Statistics
