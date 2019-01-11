import React from 'react'

// antd components
import { Avatar, Card } from 'antd'
const { Meta } = Card

const UserProfile = props => (
  <Card
    style={{
      borderRadius: '0px'
    }}
    bordered={false}
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
