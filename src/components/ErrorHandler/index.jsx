import React, { Component } from 'react'

// antd
import { Modal } from 'antd'

class ErrorHandler extends Component {
  componentDidMount () {
    Modal.error({
      title: this.props.error.title,
      content: this.props.error.message
    })
  }

  render () {
    return <div />
  }
}

export default ErrorHandler
