import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  componentDidMount () {
    this.props.getUserInfo('88517742')
  }
  render () {
    return (
      <div className='App'>
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
        </header>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
