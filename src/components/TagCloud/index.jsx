import React from 'react'

import { Tooltip } from 'antd'

// import TagCloud from 'react-tag-cloud'
import { TagCloud } from 'react-tagcloud'
// import randomColor from 'randomcolor'

import './style.css'

// bring your own implementation of rng
let seed = 1337
const random = () => {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const customRenderer = (tag, size, color) => (
  <Tooltip key={tag.value} title={`${tag.value} (${tag.count})`}>
    <span key={tag.value}
      style={{
        // animation: 'blinker 3s linear infinite',
        // animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size}em`,
        border: `2px solid ${color}`,
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: 'gray'
      }}
    >
      {tag.value}
    </span>
  </Tooltip>
)
const TagCloudComponent = (props) => {
  const tags = props.data.map(data => ({
    value: data.key,
    count: data.value
  }))
  return (
    // <TagCloud
    //   style={{
    //     // fontFamily: 'sans-serif',
    //     fontSize: 12,
    //     fontWeight: 'bold',
    //     fontStyle: 'italic',
    //     // color: () => randomColor(),
    //     color: 'gray',
    //     padding: 5,
    //     width: '100%',
    //     height: '400px'
    //   }}>
    //   {
    //     props.data.map((data, idx) => {
    //       return (
    //         <div style={{ fontSize: data.value * 9 }} key={idx} >
    //           <Tooltip key={data.value} text={data.value} >
    //             {data.key}
    //           </Tooltip>
    //         </div>
    //       )
    //     })
    //   }
    // </TagCloud>
    <TagCloud
      tags={tags}
      minSize={1}
      maxSize={5}
      renderer={customRenderer}
      randomNumberGenerator={random}
    />
  )
}

export default TagCloudComponent
