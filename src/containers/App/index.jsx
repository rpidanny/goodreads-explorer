import React, { Component, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import {
  withRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'
import Fallback from '../../components/Fallback'

// antd components
import { Spin } from 'antd'

import 'antd/dist/antd.css'
import './style.css'

// containers
const Dashboard = lazy(() => import('../Dashboard'))
const Home = lazy(() => import('../Home'))
const ErrorBoundary = lazy(() => import('../../components/ErrorBoundary'))
const ErrorHandler = lazy(() => import('../../components/ErrorHandler'))

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  error: state.app.error
})

const mapDispatchToProps = {

}

class App extends Component {
  constructor (props) {
    super(props)

    this.searchHandler = this.searchHandler.bind(this)

    // Google analytics
    ReactGA.initialize('UA-132487735-1', { testMode: this.props.testMode })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  searchHandler (userId) {
    this.props.history.push(`/user/${userId}/graph/rgraph`)
  }

  componentDidMount () {
    // Maybe get top books from goodreads?
  }

  render () {
    return (
      <Suspense fallback={<Fallback />} >
        <ErrorBoundary>
          <Spin
            className='App'
            spinning={this.props.isLoading > 0}
            delay={500}
          >
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Suspense fallback={<Fallback />} >
                    <Home
                      searchHandler={this.searchHandler}
                    />
                  </Suspense>
                )}
              />
              <Route
                path='/user/:userId'
                render={props => (
                  <Suspense fallback={<Fallback />} >
                    <Dashboard {...props} />
                  </Suspense>
                )}
              />
              <Redirect to='/' />
            </Switch>
            {
              this.props.error && (
                <ErrorHandler error={this.props.error} />
              )
            }
          </Spin>
        </ErrorBoundary>
      </Suspense>
    )
  }
}

App.defaultProps = {
  testMode: false
}

App.propTypes = {
  testMode: PropTypes.bool
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
