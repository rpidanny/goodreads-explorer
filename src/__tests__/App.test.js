/* global it */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../configureStore'
import App from '../containers/App'

import 'jest-canvas-mock'

const store = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}><Router><App testMode /></Router></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
