import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserInfo, getUserData } from './action'

// antd components
import { Layout, Menu, Breadcrumb, Icon, Tree } from 'antd'

import UserProfile from '../../components/UserProfile'
import NetworkGraph from '../../components/NetworkGraph'
import BookLibrary from '../../components/BookLibrary'
import Settings from '../../components/Settings'

import { getGraphData } from '../../utils/graphHelper'

import bgImage from '../../components/NetworkGraph/examples/basic/tiny_grid.png'
import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'

import './style.css'

const { SubMenu } = Menu
const { Content, Sider } = Layout
const { TreeNode } = Tree

const mapStorageToProps = state => ({
  userInfo: state.dashboard.userInfo,
  userData: state.dashboard.userData
})

const mapDispatchToProps = {
  getUserInfo,
  getUserData
}

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedShelf: null,
      selectedShelves: [],
      selectedMenu: 0
    }

    this.onSelect = this.onSelect.bind(this)
    this.onCheck = this.onCheck.bind(this)
  }

  componentDidMount () {
    this.props.getUserData(this.props.match.params.userId)
  }

  onSelect (selectedKeys, info) {
    console.log('selected', selectedKeys, info)
  }

  onCheck (checkedKeys, info) {
    console.log('onCheck', checkedKeys, info)
    this.setState({
      selectedShelves: checkedKeys
    })
  }

  render () {
    const { userData } = this.props
    // console.log(userData)
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
              getMenu(this)
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
              { getContent(this) }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

const getContent = (context) => {
  const { selectedMenu, selectedShelves, selectedShelf } = context.state
  const { userData } = context.props

  if (selectedMenu === 0) {
    return getGraph(userData, selectedShelves)
  } else if (selectedMenu === 1) {
    return getBookLibrary(userData, selectedShelf)
  }
}

const getGraph = (userData, shelves) => {
  if (userData) {
    const { nodes, links } = getGraphData(userData, shelves)
    console.log('GraphData', nodes)
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

const getMenu = (context) => {
  const { userData } = context.props
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
        selectable
      >
        <SubMenu
          key='shelves'
          title={
            <span><Icon type='book' />Shelves</span>
          }
          selectable
          onClick={(event) => console.log(event)}
        >
          <Tree
            checkable
            onSelect={context.onSelect}
            onCheck={context.onCheck}
          >
            {
              userData.user_shelves.map((shelf, idx) => {
                const books = shelf.books.book.length ? shelf.books.book : [shelf.books.book]
                return (
                  <TreeNode
                    checkable
                    title={`${shelf.name} (${books.length})`}
                    key={shelf.name}
                  />
                )
              })
            }
          </Tree>
        </SubMenu>
        <SubMenu
          key='settings'
          title={<span><Icon type='setting' />Settings</span>}
        >
          <Settings
            onChange={(value) => console.log('Settings', value)}
          />
          {/* {
            userData.user_shelves.map((shelf, idx) => (
              <Menu.Item key={idx}>
                <Link to={`/user/${userData.id}/shelf/${shelf.name}`}>
                  {`${shelf.name} (${shelf.books.book ? shelf.books.book.length || 1 : 0})`}
                </Link>
              </Menu.Item>
            ))
          } */}
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
