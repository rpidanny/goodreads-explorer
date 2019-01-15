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
      title={
        <a
          href={props.user.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {props.user.name}
        </a>
      }
      description={
        props.user.description.length > 160
          ? `${props.user.description.slice(0, 160)}...`
          : props.user.description}
      className='userCardMeta'
    />
  </Card>
)

export default UserProfile
