import React, { Component } from 'react'

import { Button, Popover } from 'antd'

import Settings from '../../components/Settings'
import NetworkGraph from '../../components/NetworkGraph'
import MultiCheckBox from '../../components/MultiCheckBox'

import { getGraphData } from '../../utils/graphHelper'

const defaultGraphSettings = {
  fps: 60,
  cluster: true,
  alphaStart: 1,
  animation: true,
  velocityDecay: 0.1,
  chargeStrength: -100,
  collisionStrength: 0.5,
  collisionRadiusOffset: 15,
  attraceForceStrength: -100,
  clusterRadiusScale: 2
}

class RelationshipGraph extends Component {
  constructor (props) {
    super(props)

    // get graph settings from localstorage
    const settings = window.localStorage.getItem('graphSettings')

    this.state = {
      graphSettings: settings ? JSON.parse(settings) : defaultGraphSettings,
      settingsPopover: false,
      shelvesSelectPopover: false,
      nodes: [],
      links: [],
      shelves: [],
      selectedShelves: []
    }

    this.hideSettings = this.hideSettings.bind(this)
    this.handleSettingsChange = this.handleSettingsChange.bind(this)
    this.handleSettingsReset = this.handleSettingsReset.bind(this)
    this.handleSettingsVisibleChange = this.handleSettingsVisibleChange.bind(this)

    this.hideShelvesSelect = this.hideShelvesSelect.bind(this)
    this.handleShelvesChange = this.handleShelvesChange.bind(this)
    this.handleShelvesSelectVisibleChange = this.handleShelvesSelectVisibleChange.bind(this)
  }

  componentDidMount () {
    const shelves = this.props.userData.user_shelves.map(shelf => {
      return shelf.name
    })
    const { nodes, links } = getGraphData(this.props.userData, shelves)
    this.setState({
      nodes,
      links,
      shelves,
      selectedShelves: shelves
    })
  }

  handleSettingsVisibleChange (visible) {
    this.setState({ settingsPopover: visible })
  }

  hideSettings () {
    this.setState({ settingsPopover: false })
  }

  handleSettingsChange (settings) {
    this.setState({
      graphSettings: settings
    })
    // Store settings on local storage
    window.localStorage.setItem('graphSettings', JSON.stringify(settings))
  }

  handleSettingsReset () {
    this.setState({
      graphSettings: defaultGraphSettings
    })

    // clear settings on local storage
    window.localStorage.removeItem('graphSettings')
    window.location.reload()
  }

  hideShelvesSelect () {
    this.setState({ shelvesSelectPopover: false })
  }

  handleShelvesSelectVisibleChange (visible) {
    this.setState({ shelvesSelectPopover: visible })
  }

  handleShelvesChange (selectedShelves) {
    const { nodes, links } = getGraphData(this.props.userData, selectedShelves)
    this.setState({
      nodes,
      links,
      selectedShelves
    })
  }

  render () {
    const {
      nodes,
      links,
      graphSettings,
      settingsPopover,
      shelvesSelectPopover,
      shelves
    } = this.state
    return (
      <NetworkGraph
        nodes={nodes}
        links={links}
        {...graphSettings}
      >
        <Popover
          content={
            <Settings
              onChange={this.handleSettingsChange}
              onReset={this.handleSettingsReset}
              settings={graphSettings}
            />
          }
          title='Settings'
          trigger='click'
          visible={settingsPopover}
          onVisibleChange={this.handleSettingsVisibleChange}
          placement='bottomLeft'
        >
          <Button
            icon='setting'
            style={{
              position: 'fixed',
              top: 40,
              right: 40
            }}
          />
        </Popover>
        <Popover
          content={
            <MultiCheckBox
              onChange={this.handleShelvesChange}
              options={shelves}
              defaultCheckedList={shelves}
            />
          }
          title='Shelves'
          trigger='click'
          visible={shelvesSelectPopover}
          onVisibleChange={this.handleShelvesSelectVisibleChange}
          placement='bottomLeft'
        >
          <Button
            icon='book'
            style={{
              position: 'fixed',
              top: 40,
              right: 80
            }}
          />
        </Popover>
      </NetworkGraph>
    )
  }
}

export default RelationshipGraph
