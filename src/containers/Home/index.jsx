import React, { lazy } from 'react'

// antd components
import { Row, Col, Layout, Input } from 'antd'

import './style.css'

// import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'
import goodReadsLogo from '../../assets/images/good_reads_explorer.png'
import forkMe from '../../assets/images/forkme_right_green.png'

const Quote = lazy(() => import('../../components/Quote'))

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
        <Col span={5} />
        <Col span={14}>
          <Quote/>
        </Col>
        <Col span={5} />
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
      <Row>
        <img
          src='https://img.shields.io/badge/Made%20with%20%E2%9D%A4%20in-Nepal-%23dc3545.svg'
          alt='Made with love in Nepal'
        />
      </Row>
    </Layout>
    <a
      href='https://github.com/rpidanny/goodreads-explorer'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img className='forkme' src={forkMe} alt='Fork me on GitHub' />
    </a>
  </div>
)

export default Home
