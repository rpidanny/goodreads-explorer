import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Checkbox } from 'antd'

import './style.css'

class MultiCheckBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checkedList: props.defaultCheckedList,
      indeterminate: true,
      checkAll: false
    }

    this.onChange = this.onChange.bind(this)
    this.onCheckAllChange = this.onCheckAllChange.bind(this)
  }

  onChange (option, state) {
    let { checkedList } = this.state
    if (state) {
      checkedList.push(option)
    } else {
      checkedList = checkedList.filter(opt => opt !== option)
    }
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < this.props.options.length),
      checkAll: checkedList.length === this.props.options.length
    }, () => this.props.onChange(this.state.checkedList))
  }

  onCheckAllChange (e) {
    this.setState({
      checkedList: e.target.checked ? this.props.options : [],
      indeterminate: false,
      checkAll: e.target.checked
    }, () => this.props.onChange(this.state.checkedList))
  }

  render () {
    return (
      <div className={this.props.className}>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <ul className='shelvesCheckboxGroup' >
          {
            this.props.options.map((option, idx) => (
              <li key={idx}>
                <Checkbox
                  onChange={val => this.onChange(option, val.target.checked)}
                  key={option}
                  checked={this.props.defaultCheckedList.indexOf(option) > -1}
                  disabled={this.props.disable[idx]}
                >
                  {this.props.optionLabel[idx] ? this.props.optionLabel[idx] : option}
                </Checkbox>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

MultiCheckBox.defaultProps = {
  disable: [],
  optionLabel: []
}

MultiCheckBox.propTpes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  optionLabel: PropTypes.array,
  defaultCheckedList: PropTypes.array,
  disable: PropTypes.array
}

export default MultiCheckBox
