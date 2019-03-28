import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import config from './config'

import './style.css'

const Quote = (props) => {
  return (
    <div className='barGraph'>
      <ResponsiveBar
        data={props.data}
        indexBy='key'
        margin={config.margin}
        padding={0.3}
        colors='nivo'
        colorBy='id'
        defs={config.defs}
        fill={config.fill}
        borderColor='inherit:darker(1.6)'
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.xLabel,
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.yLabel,
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor='inherit:darker(1.6)'
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={config.legends}
      />
    </div>
  )
}

export default Quote
