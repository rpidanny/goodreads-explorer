import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd'

import 'antd/dist/antd.css'

import './style.scss'

class Home extends Component {
  render () {
    const Search = Input.Search

    return (
      <div className='Home'>
        <Row className='center'>
          <Col span={6} />
          <Col span={12}>
            <Search
              placeholder='input search text'
              onSearch={value => console.log(value)}
              enterButton
            />
          </Col>
          <Col span={6} />
        </Row>
      </div>
    )
  }
}

export default Home
