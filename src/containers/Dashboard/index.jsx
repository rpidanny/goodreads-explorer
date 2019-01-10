import React, { Component } from 'react'

// antd components
import Layout from 'antd/es/layout'

import './style.css'

const { Content, Sider } = Layout

class Dashboard extends Component {
  render () {
    return (
      <Layout
        className='dashboard'
      >
        <Sider>Sider</Sider>
        <Content>
          <p>
            User Data for <code>{this.props.match.params.userId}</code>
          </p>
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
