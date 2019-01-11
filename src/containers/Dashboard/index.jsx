import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from './action'

// antd components
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import UserProfile from '../../components/UserProfile'
import NetworkGraph from '../../components/NetworkGraph'

import bgImage from '../../components/NetworkGraph/examples/basic/tiny_grid.png'
import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'
import { nodes, links } from '../../components/NetworkGraph/examples/basic/books-data.json'

import './style.css'

const { SubMenu } = Menu
const { Content, Sider } = Layout

const mapStorageToProps = state => ({
  userInfo: state.dashboard.userInfo
})

const mapDispatchToProps = {
  getUserInfo
}

class Dashboard extends Component {
  componentDidMount () {
    this.props.getUserInfo(this.props.match.params.userId)
  }

  render () {
    const { userInfo } = this.props
    console.log(userInfo)
    return (
      <Layout
        className='dashboard'
      >
        <Layout>
          <Sider width={250} >
            <div className='logo' style={{
              padding: '10px',
              background: '#fff'
            }}>
              <img
                src={goodReadsLogo}
                width='100%'
                alt='Goodreads'
              />
            </div>
            {
              getUserComponent(userInfo)
            }
            <Menu
              mode='inline'
              defaultOpenKeys={['shelves']}
              style={{
                // height: '100%',
                borderRight: 0
              }}
              theme='dark'
            >
              {getBookShelves(userInfo)}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Books</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='mainContent'
              style={{
                backgroundImage: { bgImage }, padding: 0, margin: 0, height: '100%'
              }}
            >
              {/* <p>
                User Data for <code>{this.props.match.params.userId}</code>
              </p> */}
              {
                getGraph(userInfo)
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

const getGraph = (userInfo) => {
  if (userInfo) {
    return (
      <NetworkGraph
        nodes={nodes}
        links={links}
      />
    )
  }
}

const getUserComponent = (userInfo) => {
  if (userInfo) {
    return (
      <UserProfile
        user={{
          name: userInfo.name || '',
          userName: userInfo.user_name || '',
          image: userInfo.image_url || '',
          description: typeof userInfo.about === 'string' ? userInfo.about : `Last active: ${userInfo.last_active}`
        }}
      />
    )
  }
  return (
    <UserProfile
      user={{
        name: '',
        userName: '',
        image: '',
        description: ''
      }}
    />
  )
}

const getBookShelves = (userInfo) => {
  if (userInfo) {
    return (
      <SubMenu key='shelves' title={<span><Icon type='book' />Shelves</span>}>
        {
          userInfo.user_shelves.user_shelf.map((shelf, idx) => (
            <Menu.Item key={idx}>
              {`${shelf.name} (${shelf.book_count.$t})`}
            </Menu.Item>

          ))
        }
      </SubMenu>
    )
  }
}

export default connect(
  mapStorageToProps,
  mapDispatchToProps
)(Dashboard)
