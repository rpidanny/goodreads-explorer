import React from 'react'

import TagCloud from 'react-tag-cloud'
// import randomColor from 'randomcolor'

import './style.css'

const TagCloudComponent = (props) => {
  return (
    <TagCloud
      style={{
        // fontFamily: 'sans-serif',
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
        // color: () => randomColor(),
        color: 'gray',
        padding: 5,
        width: '100%',
        height: '20vh'
      }}>
      {
        props.data.map(data => {
          return (
            <div style={{ fontSize: data.value * 9 }} key={data.key} >{data.key}</div>
          )
        })
      }
    </TagCloud>
  )
}

export default TagCloudComponent
