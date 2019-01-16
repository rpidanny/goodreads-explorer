import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Checkbox, Slider, Button, Tooltip } from 'antd'

import './style.css'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['animation', 'cluster']

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props
    }

    this.defaultOptions = plainOptions.filter((option) => this.props.settings[option])

    this.updateState = this.updateState.bind(this)

    // settings handler
    this.updateFps = this.updateFps.bind(this)
    this.updateCluster = this.updateCluster.bind(this)
    this.updateAnimation = this.updateAnimation.bind(this)
    this.updateAlphaStart = this.updateAlphaStart.bind(this)
    this.updateVelocityDecay = this.updateVelocityDecay.bind(this)
    this.updateChargeStrength = this.updateChargeStrength.bind(this)
    this.updateCollisionStrength = this.updateCollisionStrength.bind(this)
    this.updateClusterRadiusScale = this.updateClusterRadiusScale.bind(this)
    this.updateCollisionRadiusOffset = this.updateCollisionRadiusOffset.bind(this)
    this.updateClusterForceStrength = this.updateClusterForceStrength.bind(this)
    this.updateAttracForceStrength = this.updateAttracForceStrength.bind(this)
  }

  updateState (val) {
    // update local state and trigger parent onChange function
    this.setState({
      settings: {
        ...this.state.settings,
        ...val
      }
    },
    () => this.props.onChange(this.state.settings))
  }

  updateFps (val) {
    this.updateState({
      fps: val
    })
  }

  updateCluster (val) {
    this.updateState({
      cluster: val
    })
  }

  updateAnimation (val) {
    this.updateState({
      animation: val
    })
  }

  updateAlphaStart (val) {
    this.updateState({
      alphaStart: val
    })
  }

  updateVelocityDecay (val) {
    this.updateState({
      velocityDecay: val
    })
  }

  updateChargeStrength (val) {
    this.updateState({
      chargeStrength: val
    })
  }

  updateCollisionStrength (val) {
    this.updateState({
      collisionStrength: val
    })
  }

  updateClusterRadiusScale (val) {
    this.updateState({
      clusterRadiusScale: val
    })
  }

  updateCollisionRadiusOffset (val) {
    this.updateState({
      collisionRadiusOffset: val
    })
  }

  updateAttracForceStrength (val) {
    this.updateState({
      attraceForceStrength: val
    })
  }

  updateClusterForceStrength (val) {
    this.updateState({
      clusterForceStrength: val
    })
  }

  render () {
    const {
      fps,
      alphaStart,
      velocityDecay,
      attraceForceStrength,
      collisionStrength,
      collisionRadiusOffset,
      clusterRadiusScale,
      chargeStrength,
      clusterForceStrength
    } = this.state.settings

    // this.props.onChange(this.state)

    return (
      <div
        className='settings'
      >
        <ul>
          <li>
            <div style={{ borderBottom: '1px solid #E9E9E9', padding: 5 }}>
              <CheckboxGroup
                options={plainOptions}
                value={this.defaultOptions}
                onChange={(checked) => {
                  this.defaultOptions = checked
                  this.updateState({
                    animation: checked.indexOf('animation') > -1,
                    cluster: checked.indexOf('cluster') > -1
                  })
                }}
                className='settingsCheckbox'
              />
            </div>
          </li>
          <li>
            <Tooltip title='How many times per second to render the graph.' placement='rightTop'>
              FPS ({fps})
            </Tooltip>
            <Slider
              defaultValue={fps}
              max={120}
              min={1}
              step={1}
              onAfterChange={this.updateFps}
            />
          </li>
          <li>
            <Tooltip title='Initial Alpha of simulation.' placement='rightTop'>
              Alpha Start ({alphaStart})
            </Tooltip>
            <Slider
              defaultValue={alphaStart}
              max={1}
              min={0}
              step={0.01}
              onAfterChange={this.updateAlphaStart}
            />
          </li>
          <li>
            <Tooltip
              title='The decay factor is akin to atmospheric friction; after the application of any forces during a tick, each node’s velocity is multiplied by 1 - decay. As with lowering the alpha decay rate, less velocity decay may converge on a better solution, but risks numerical instabilities and oscillation.'
              placement='rightTop'
            >
              velocity Decay ({velocityDecay})
            </Tooltip>
            <Slider
              defaultValue={velocityDecay}
              max={1}
              min={0}
              step={0.01}
              onAfterChange={this.updateVelocityDecay}
            />
          </li>
          <li>
            <Tooltip title='It can be used to simulate gravity (attraction) if the strength is positive, or electrostatic charge (repulsion) if the strength is negative.' placement='rightTop'>
              Charge Strength ({chargeStrength})
            </Tooltip>
            <Slider
              defaultValue={chargeStrength}
              max={500}
              min={-500}
              step={1}
              onAfterChange={this.updateChargeStrength}
            />
          </li>
          <li>
            <Tooltip title='Sets the collision force strength to the specified number.' placement='rightTop'>
              Collision Strength ({collisionStrength})
            </Tooltip>
            <Slider
              defaultValue={collisionStrength}
              max={1}
              min={0}
              step={0.01}
              onAfterChange={this.updateCollisionStrength}
            />
          </li>
          <li>
            <Tooltip title='The collision force treats nodes as circles with a given radius, rather than points, and prevents nodes from overlapping.' placement='rightTop'>
              Collision Radius Offset ({collisionRadiusOffset})
            </Tooltip>
            <Slider
              defaultValue={collisionRadiusOffset}
              max={50}
              min={0}
              step={1}
              onAfterChange={this.updateCollisionRadiusOffset}
            />
          </li>
          <li>
            <Tooltip title='Sets attractive force strength between nodes' placement='rightTop'>
              Attractive Force Strength ({attraceForceStrength})
            </Tooltip>
            <Slider
              defaultValue={attraceForceStrength}
              max={500}
              min={-500}
              step={1}
              onAfterChange={this.updateAttracForceStrength}
            />
          </li>
          <li>
            <Tooltip title='Radius of the circle around which to cluster the nodes.' placement='rightTop'>
              Cluster Radius Scale ({clusterRadiusScale})
            </Tooltip>
            <Slider
              defaultValue={clusterRadiusScale}
              max={10}
              min={0.5}
              step={0.5}
              onAfterChange={this.updateClusterRadiusScale}
            />
          </li>
          <li>
            <Tooltip title='Strength of clustering of nodes.' placement='rightTop'>
              Cluster Force Strength ({clusterForceStrength})
            </Tooltip>
            <Slider
              defaultValue={clusterForceStrength}
              max={1}
              min={0}
              step={0.01}
              onAfterChange={this.updateClusterForceStrength}
            />
          </li>
          <div
            style={{
              padding: 10
            }}
          >
            <Button
              type='danger'
              onClick={() => this.props.onReset()}
              block
            >
              Reset
            </Button>
          </div>
        </ul>
      </div>
    )
  }
}

Settings.defaultProps = {
  settings: {
    fps: 60,
    cluster: true,
    alphaStart: 1,
    animation: true,
    velocityDecay: 0.1,
    chargeStrength: -100,
    clusterRadiusScale: 2,
    collisionStrength: 0.5,
    collisionRadiusOffset: 15,
    attraceForceStrength: -100
  }
}

Settings.propTypes = {
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    fps: PropTypes.number,
    cluster: PropTypes.bool,
    alphaStart: PropTypes.number,
    animation: PropTypes.bool,
    velocityDecay: PropTypes.number,
    chargeStrength: PropTypes.number,
    clusterRadiusScale: PropTypes.number,
    collisionStrength: PropTypes.number,
    collisionRadiusOffset: PropTypes.number,
    attraceForceStrength: PropTypes.number
  })
}

export default Settings
