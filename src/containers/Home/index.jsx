import React from 'react'

// antd components
import { Row, Col, Layout, Input } from 'antd'

import './style.css'

// import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'
import goodReadsLogo from '../../assets/images/good_reads_explorer.png'
import forkMe from '../../assets/images/forkme_right_green.png'

const { Search } = Input

const Home = (props) => (
  <div>
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
    <a
      href='https://github.com/rpidanny/goodreads-explorer'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img className='forkme' src={forkMe} alt='GitHub' />
    </a>
  </div>
)

export default Home
