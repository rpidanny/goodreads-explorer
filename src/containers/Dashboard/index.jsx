import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { getUserInfo, getUserData } from './action'

// antd components
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import UserProfile from '../../components/UserProfile'
import NetworkGraph from '../../components/NetworkGraph'
import BookLibrary from '../../components/BookLibrary'

import { getGraphData } from '../../utils/graphHelper'

import bgImage from '../../components/NetworkGraph/examples/basic/tiny_grid.png'
import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'

import './style.css'

const { SubMenu } = Menu
const { Content, Sider } = Layout

const mapStorageToProps = state => ({
  userInfo: state.dashboard.userInfo,
  userData: state.dashboard.userData
})

const mapDispatchToProps = {
  getUserInfo,
  getUserData
}

class Dashboard extends Component {
  componentDidMount () {
    this.props.getUserData(this.props.match.params.userId)
  }

  render () {
    const { userData } = this.props
    console.log(userData)
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
              <Link to={'/'}>
                <img
                  src={goodReadsLogo}
                  width='100%'
                  alt='Goodreads'
                />
              </Link>
            </div>
            {
              getUserComponent(userData)
            }
            {
              getMenu(this.props)
            }
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
                <Switch>
                  <Route
                    exact
                    path='/user/:userId/explore'
                    render={() => getGraph(userData)}
                  />
                  <Route
                    exact
                    path='/user/:userId/shelf/:shelfId'
                    render={props => getBookLibrary(userData, props.match.params.shelfId)}
                  />
                </Switch>
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

const getGraph = (userData) => {
  if (userData) {
    const { nodes, links } = getGraphData(userData)
    return (
      <NetworkGraph
        nodes={nodes}
        links={links}
      />
    )
  }
  return <div />
}

const getUserComponent = (userData) => {
  if (userData) {
    return (
      <UserProfile
        user={{
          name: userData.name || '',
          userName: userData.user_name || '',
          image: userData.image_url || '',
          description: typeof userData.about === 'string' ? userData.about : `Last active: ${userData.last_active}`
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

const getMenu = (props) => {
  const { userData } = props
  console.log(userData)
  if (userData) {
    return (
      <Menu
        mode='inline'
        defaultOpenKeys={['explore']}
        style={{
          // height: '100%',
          borderRight: 0
        }}
        theme='light'
      >
        <SubMenu
          key='explore'
          title={
            <Link to={`/user/${props.match.params.userId}/explore`}>
              <span><Icon type='book' />Explore Books</span>
            </Link>
          }
        />
        <SubMenu key='shelves' title={<span><Icon type='book' />Shelves</span>}>
          {
            userData.user_shelves.map((shelf, idx) => (
              <Menu.Item key={idx}>
                <Link to={`/user/${userData.id}/shelf/${shelf.name}`}>
                  {`${shelf.name} (${shelf.books.book ? shelf.books.book.length || 1 : 0})`}
                </Link>
              </Menu.Item>
            ))
          }
        </SubMenu>
      </Menu>
    )
  }
}

const getBookLibrary = (userData, shelf) => {
  if (userData) {
    let bookShelf = userData.user_shelves.find(sh => sh.name === shelf)
    if (bookShelf) {
      let { books } = bookShelf
      if (!books.book) return <div />
      books = books.book.length ? books.book : [ books.book ]
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
          }}
        >
          <BookLibrary
            books={books}
            margin={0}
            columns={7}
          />
        </div>
      )
    }
    return (
      <div
        style={{
          padding: 20
        }}
      >
        <p>Bookshelf doesn't exist.</p>
      </div>
    )
  }
  return <div />
}

export default connect(
  mapStorageToProps,
  mapDispatchToProps
)(Dashboard)
