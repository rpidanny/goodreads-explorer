import React, { Component } from 'react'

import { Checkbox } from 'antd'

import './style.css'

const CheckboxGroup = Checkbox.Group

// const plainOptions = ['Apple', 'Pear', 'Orange'];
// const defaultCheckedList = ['Apple', 'Orange'];

class MultiCheckBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      options: props.options,
      checkedList: props.defaultCheckedList,
      indeterminate: true,
      checkAll: false
    }

    this.onChange = this.onChange.bind(this)
    this.onCheckAllChange = this.onCheckAllChange.bind(this)
  }

  onChange (checkedList) {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < this.state.options.length),
      checkAll: checkedList.length === this.state.options.length
    }, () => this.props.onChange(this.state.checkedList))
  }

  onCheckAllChange (e) {
    this.setState({
      checkedList: e.target.checked ? this.state.options : [],
      indeterminate: false,
      checkAll: e.target.checked
    }, () => this.props.onChange(this.state.checkedList))
  }

  render () {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          className='shelvesCheckboxGroup'
          options={this.state.options}
          value={this.state.checkedList}
          onChange={this.onChange}
          // buttonStyle='solid'
        />
      </div>
    )
  }
}

export default MultiCheckBox
