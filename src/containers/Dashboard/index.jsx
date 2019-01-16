import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserInfo, getUserData } from './action'

// antd components
import { Layout, Menu, Icon } from 'antd'

import Fallback from '../../components/Fallback'
import UserProfile from '../../components/UserProfile'
import BookShelf from '../../components/BookShelf'
import ErrorBoundary from '../../components/ErrorBoundary'

import bgImage from '../../components/NetworkGraph/examples/basic/tiny_grid.png'
// import goodReadsLogo from '../../assets/images/goodreads-logo-transparent.png'
import goodReadsLogo from '../../assets/images/good_reads_explorer.png'

import './style.css'

const RelationshipGraph = lazy(() => import('../RelationshipGraph'))

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
  constructor (props) {
    super(props)

    this.state = {
      selectedShelf: null,
      selectedShelves: [],
      openMenuKeys: [ 'relGraph' ]
    }
    console.log('Init Settings', this.state.graphSettings)

    this.onSelect = this.onSelect.bind(this)
    this.onCheck = this.onCheck.bind(this)
    this.handleMenuOpenChange = this.handleMenuOpenChange.bind(this)
    this.handleBookShelfSelect = this.handleBookShelfSelect.bind(this)

    this.rootSubmenuKeys = ['relGraph', 'shelves']
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

  handleMenuOpenChange (openKeys) {
    const latestOpenKey = openKeys.find(key => this.state.openMenuKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openMenuKeys: openKeys })
    } else {
      this.setState({
        openMenuKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  handleBookShelfSelect (event) {
    console.log('Bookshelfselect', event)
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
            <Sider
              breakpoint='lg'
              collapsedWidth='0'
              onBreakpoint={(broken) => { console.log(broken) }}
              onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
              className='sider'
              width={270}
            >
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
            <Layout
              style={{ padding: '24px 24px' }}
            >
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Books</Breadcrumb.Item>
              </Breadcrumb> */}
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
  const { selectedShelf, openMenuKeys } = context.state
  const { userData } = context.props

  const selectedMenu = context.rootSubmenuKeys.indexOf(openMenuKeys[0])

  if (context.props.userData) {
    if (selectedMenu === 0) {
      return (
        <Suspense fallback={<Fallback />}>
          <RelationshipGraph
            userData={context.props.userData}
          />
        </Suspense>
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
        openKeys={context.state.openMenuKeys}
        defaultSelectedKeys={['relationshipGraph']}
        style={{
          // height: '100%',
          borderRight: 0
        }}
        theme='light'
        onOpenChange={context.handleMenuOpenChange}
        onSelect={sel => console.log('select', sel)}
      >
        <SubMenu
          key='relGraph'
          title={
            <span><Icon type='global' />Graphs</span>
          }
        >
          <Menu.Item key='relationshipGraph'>Relationship Graph</Menu.Item>
        </SubMenu>
        <SubMenu
          key='shelves'
          title={<span><Icon type='book' />Shelves</span>}
        >
          {
            userData.user_shelves.map((shelf, idx) => (
              <Menu.Item key={idx}>
                {/* <Link to={`/user/${userData.id}/shelf/${shelf.name}`}>
                  {`${shelf.name} (${shelf.books.book ? shelf.books.book.length || 1 : 0})`}
                </Link> */}
                <a
                  onClick={event => {
                    event.preventDefault()
                    return context.setState({ selectedShelf: shelf.name })
                  }}
                  href='/#'
                >
                  {`${shelf.name} (${shelf.books.book ? shelf.books.book.length || 1 : 0})`}
                </a>
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
          <BookShelf
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
