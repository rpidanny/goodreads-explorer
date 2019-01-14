import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Fallback from './components/Fallback'

import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker'

import './style.css'

const App = lazy(() => import('./containers/App'))

const store = configureStore()

ReactDOM.render(
  <Suspense fallback={<Fallback />}>
    <Provider store={store}><Router><App /></Router></Provider>
  </Suspense>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
