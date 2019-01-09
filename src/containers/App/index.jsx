import React, { Component } from 'react'
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getUserInfo
} from './action'
import Home from '../Home'

import logo from '../../assets/images/logo.svg'
import './style.css'

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = {
  getUserInfo
}

class App extends Component {
  componentDidMount () {
    this.props.getUserInfo('88517742')
  }
  render () {
    return (
      <div className='App'>
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
            render={props => (
              <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                  User Data for <code>{props.match.params.userId}</code>
                </p>
              </header>
            )}
          />
          <Route
            exact
            path='/home'
            component={Home}
          />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
