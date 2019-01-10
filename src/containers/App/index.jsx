import React, { Component } from 'react'
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

// antd components
import Spin from 'antd/es/spin'
import 'antd/es/spin/style'

// containers
import Home from '../Home'
import Dashboard from '../Dashboard'

import {
  getUserInfo
} from './action'

import logo from '../../assets/images/logo.svg'
import './style.css'

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = {
  getUserInfo
}

class App extends Component {
  constructor () {
    super()

    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler (userId) {
    this.props.history.push(`/user/${userId}`)
  }

  componentDidMount () {
    this.props.getUserInfo('88517742')
  }

  render () {
    return (
      <Spin
        className='App'
        spinning={false}
        delay={500}
      >
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                  Edit <code>src/containers/App.js</code> and save to reload.
                </p>
                <a
                  className='App-link'
                  href='https://reactjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Learn React
                </a>
                <span>
                  <Link to='/home'>Home</Link>
                </span>
              </header>
            )}
          />
          <Route
            exact
            path='/user'
            render={props => (
              <Redirect to='/' />
            )}
          />
          <Route
            exact
            path='/user/:userId'
            component={Dashboard}
          />
          <Route
            exact
            path='/home'
            component={props => (
              <Home
                searchHandler={this.searchHandler}
              />
            )}
          />
          <Redirect to='/' />
        </Switch>
      </Spin>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
