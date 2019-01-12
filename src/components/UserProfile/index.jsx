import React from 'react'

// antd components
import { Avatar, Card } from 'antd'

import './style.css'

const { Meta } = Card

const UserProfile = props => (
  <Card
    bordered={false}
    className='userCard'
  >
    <Meta
      avatar={
        <Avatar src={props.user.image} size='large' />
      }
      title={props.user.name}
      description={props.user.description}
    />
  </Card>
)

export default UserProfile
