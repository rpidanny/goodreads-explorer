import React from 'react'

// antd components
import { Row, Col, Layout, Input } from 'antd'

import './style.css'

import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'

const { Search } = Input

const Home = (props) => (
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
          onSearch={props.searchHandler}
          // value='88517742' // seting default userId for dev
        />
      </Col>
      <Col span={8} />
    </Row>
  </Layout>
)

export default Home
