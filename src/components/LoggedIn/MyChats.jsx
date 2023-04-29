import React from 'react'
import UserList from './UserList'

const MyChats = () => {


  return (
    <div className='' style={{}}>

      {/* Header for chats */}
      <div className="d-flex justify-content-between">
        <span style={{
          fontSize:"2rem",
          backgroundColor:"#dadada",
          fontFamily:"Lobster Two",
          color:"#374c45",
          padding:"1rem",
          width:"100%",
          padding:"4px",
          paddingLeft:"33px",
          margin:"11px",
          borderRadius:"15px"
        }}>My Chats</span>
      </div>

      {/* Chats   */}
      <div>
        <UserList/>
      </div>
    </div>
  )
}

export default MyChats