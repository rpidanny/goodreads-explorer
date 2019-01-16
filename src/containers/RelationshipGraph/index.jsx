import React, { Component } from 'react'

import { Button, Popover } from 'antd'

import Settings from '../../components/Settings'
import NetworkGraph from '../../components/NetworkGraph'

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
      settingsPopover: false
    }

    this.handleVisibleChange = this.handleVisibleChange.bind(this)
    this.hideSettings = this.hideSettings.bind(this)
    this.handleSettingsChange = this.handleSettingsChange.bind(this)
    this.handleSettingsReset = this.handleSettingsReset.bind(this)
  }

  handleVisibleChange (visible) {
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

  render () {
    const { nodes, links } = this.props
    const { graphSettings, settingsPopover } = this.state
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
          onVisibleChange={this.handleVisibleChange}
          placement='bottomLeft'
          arrowPointAtCenter
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
      </NetworkGraph>
    )
  }
}

export default RelationshipGraph
