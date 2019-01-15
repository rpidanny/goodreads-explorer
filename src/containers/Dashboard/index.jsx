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
import ErrorBoundary from '../../components/ErrorBoundary'

import { getGraphData } from '../../utils/graphHelper'

import bgImage from '../../components/NetworkGraph/examples/basic/tiny_grid.png'
// import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'
import goodReadsLogo from '../../assets/images/good_reads_explorer.png'

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

const defaultGraphSettings = {
  fps: 60,
  cluster: true,
  alphaStart: 1,
  animation: true,
  velocityDecay: 0.1,
  chargeStrength: -100,
  collisionStrength: 0.5,
  collisionRadiusOffset: 15,
  attraceForceStrength: -100,
  clusterRadiusScale: 2
}

class Dashboard extends Component {
  constructor (props) {
    super(props)

    // get graph settings from localstorage
    const settings = window.localStorage.getItem('graphSettings')

    this.state = {
      selectedShelf: null,
      selectedShelves: [],
      selectedMenu: 0,
      graphSettings: settings ? JSON.parse(settings) : defaultGraphSettings
    }
    console.log('Init Settings', this.state.graphSettings)
    this.onSelect = this.onSelect.bind(this)
    this.onCheck = this.onCheck.bind(this)
    this.onSettingsChange = this.onSettingsChange.bind(this)
    this.onSettingsReset = this.onSettingsReset.bind(this)
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

  onSettingsChange (settings) {
    this.setState({
      graphSettings: settings
    })
    // Store settings on local storage
    window.localStorage.setItem('graphSettings', JSON.stringify(settings))
  }

  onSettingsReset () {
    this.setState({
      graphSettings: defaultGraphSettings
    })

    // clear settings on local storage
    window.localStorage.removeItem('graphSettings')
    window.location.reload()
  }

  render () {
    const { userData } = this.props
    // console.log(userData)
    return (
      <ErrorBoundary>
        <Layout
          className='dashboard'
        >
          <Layout>
            <Sider className='sider' width={270} >
              <div className='logo' style={{
                padding: '10px',
                background: '#fff'
              }}>
                <Link to={'/'}>
                  <img
                    src={goodReadsLogo}
                    width='250px'
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
      </ErrorBoundary>
    )
  }
}

const getContent = (context) => {
  const { selectedMenu, selectedShelf, graphSettings } = context.state
  const { userData } = context.props
  if (context.props.userData) {
    if (selectedMenu === 0) {
      const { nodes, links } = getGraphData(context.props.userData, context.state.selectedShelves)
      return (
        <NetworkGraph
          nodes={nodes}
          links={links}
          {...graphSettings}
        />
      )
    } else if (selectedMenu === 1) {
      return getBookLibrary(userData, selectedShelf)
    }
  }
}

const getUserComponent = (userData) => {
  if (userData) {
    return (
      <UserProfile
        user={{
          name: userData.name || '',
          userName: userData.user_name || '',
          image: userData.image_url || '',
          link: userData.link,
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
  if (userData) {
    console.log(userData)
    return (
      <Menu
        mode='inline'
        defaultOpenKeys={['shelves']}
        style={{
          // height: '100%',
          borderRight: 0
        }}
        theme='light'
        // selectable
      >
        <SubMenu
          key='shelves'
          title={
            <span><Icon type='book' />Shelves</span>
          }
        >
          <Tree
            checkable
            onSelect={context.onSelect}
            onCheck={context.onCheck}
            className='shelves'
          >
            {
              userData.user_shelves.map(shelf => {
                if (shelf.books.book) {
                  const books = shelf.books.book.length ? shelf.books.book : [shelf.books.book]
                  return (
                    <TreeNode
                      title={`${shelf.name} (${books.length})`}
                      key={shelf.name}
                      className='booksList'
                    >
                      {
                        books.map((book, idx) => {
                          return (
                            <TreeNode
                              title={`${book.title} (${book.published})`}
                              key={`${idx}_${book.title}`}
                              disableCheckbox
                            />
                          )
                        })
                      }
                    </TreeNode>
                  )
                }
                return (
                  <TreeNode
                    title={`${shelf.name} (0)`}
                    key={shelf.name}
                    disabled
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
            onChange={context.onSettingsChange}
            onReset={context.onSettingsReset}
            settings={context.state.graphSettings}
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
