import React, { Component } from 'react'
import {
  withRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

// antd components
import { Spin } from 'antd'

import 'antd/dist/antd.css'
import './style.css'

// containers
import Home from '../Home'
import Dashboard from '../Dashboard'

const mapStateToProps = state => ({
  isLoading: state.app.isLoading
})

const mapDispatchToProps = {

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
    // Maybe get top books from goodreads?
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
            path='/user/:userId'
            render={props => (
              <Dashboard {...props} />
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
