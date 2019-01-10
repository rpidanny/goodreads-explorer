import React, { Component } from 'react'
import {
  withRouter,
  Route,
  Switch,
  Redirect
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

import './style.css'

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  userInfo: state.app.userInfo
})

const mapDispatchToProps = {
  getUserInfo
}

class App extends Component {
  constructor (props) {
    super(props)

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
        spinning={this.props.isLoading > 0}
        delay={500}
      >
        <Switch>
          <Route
            exact
            path='/'
            component={props => (
              <Home
                searchHandler={this.searchHandler}
              />
            )}
          />
          <Route
            exact
            path='/user/:userId'
            component={Dashboard}
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
