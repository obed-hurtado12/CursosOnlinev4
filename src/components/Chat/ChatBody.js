import React, { Component } from 'react'
// import "./chatBody.css"
import ChatList from 'components/ChatList/ChatList'
import ChatContent from 'components/ChatContent/ChatContent'
import UserProfile from 'components/UserProfile/UserProfile'

export default class chatBody extends Component {
  render() {
    return <div className='main__chatBody'>
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  }
}
