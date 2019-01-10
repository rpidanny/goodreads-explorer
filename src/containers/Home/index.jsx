import React, { Component } from 'react'

// antd components
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Search from 'antd/es/input/Search'
import 'antd/dist/antd.css'

import './style.css'

import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'

class Home extends Component {
  render () {
    return (
      <Layout className='Home' >
        <Row className='center'>
          <Col span={6} />
          <Col span={12}>
            <img
              src={goodReadsLogo}
              width='100%'
              alt='Goodreads'
            />
          </Col>
          <Col span={6} />
        </Row>
        <Row className='center'>
          <Col span={8} />
          <Col span={8}>
            <Search
              placeholder='Enter user id'
              onSearch={this.props.searchHandler}
              enterButton={this.props.searchHandler}
            />
          </Col>
          <Col span={8} />
        </Row>
      </Layout>
    )
  }
}

export default Home
