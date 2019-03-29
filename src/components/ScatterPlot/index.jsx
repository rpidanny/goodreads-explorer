import React from 'react'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

import './style.css'

const ScatterPlot = props => {
  return (
    <div
      style={{
        width: '100%',
        height: '400px'
      }}
    >
      <ResponsiveScatterPlot
        data={props.data}
        margin={{
          top: 60,
          right: 60,
          bottom: 70,
          left: 90
        }}
        xScale={{
          type: 'linear',
          min: 0,
          max: 'auto'
        }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto'
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.xLabel,
          legendPosition: 'middle',
          legendOffset: 46
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.yLabel,
          legendPosition: 'middle',
          legendOffset: -60
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        // legends={[
        //   {
        //     anchor: 'bottom-right',
        //     direction: 'column',
        //     translateX: 130,
        //     itemWidth: 100,
        //     itemHeight: 12,
        //     itemsSpacing: 5,
        //     itemTextColor: '#999',
        //     symbolSize: 12,
        //     symbolShape: 'circle',
        //     effects: [
        //       {
        //         on: 'hover',
        //         style: {
        //           itemTextColor: '#000'
        //         }
        //       }
        //     ]
        //   }
        // ]}
      />
    </div>
  )
}

export default ScatterPlot
