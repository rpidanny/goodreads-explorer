import React from 'react'
// import { Spin } from 'antd'

import './style.css'

// const FallBack = () => (
//   <Spin
//     className='App'
//     spinning
//     delay={1}
//     size='large'
//   />
// )

const FallBack = () => <div className='suspenseFallback'>Loading...</div>

export default FallBack
