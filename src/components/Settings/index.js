import React, { Component } from 'react'

import { Checkbox, Tree } from 'antd'

import './style.css'

const { TreeNode } = Tree
const CheckboxGroup = Checkbox.Group

class Settings extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Tree
        showLine
        checkable
      >
        <TreeNode
          title='Force'
          key='force'
        >
          <TreeNode>
            <Checkbox
              onChange={(values) => console.log(values)}
            >
              Cluster
            </Checkbox>
          </TreeNode>
        </TreeNode>
      </Tree>
    )
  }
}

export default Settings
