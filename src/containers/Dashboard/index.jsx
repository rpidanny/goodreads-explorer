import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from './action'

// antd components
import Layout from 'antd/es/layout'

import './style.css'

const { Content, Sider } = Layout

const mapStorageToProps = state => ({
  userInfo: state.dashboard.userInfo
})

const mapDispatchToProps = {
  getUserInfo
}

class Dashboard extends Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getUserInfo('88517742')
  }

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

export default connect(
  mapStorageToProps,
  mapDispatchToProps
)(Dashboard)
