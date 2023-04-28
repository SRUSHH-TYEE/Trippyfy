import React from 'react'
import { ChatState } from '../../Context/ChatProvider'
import SideDrawer from '../../components/LoggedIn/SideDrawer';
import MyChats from '../../components/LoggedIn/MyChats';
import ChatBox from '../../components/LoggedIn/ChatBox';
import { Box } from '@chakra-ui/react';
import ChatBg from '../../components/LoggedIn/ChatBg';

const ChatsPage = () => {
  const {user} = ChatState();
  return (
    <div style={{width:"100%"}}>

      <ChatBg/>
      {user && <SideDrawer/>}

      <Box display="flex" justifyContent="space-between" width="100%" height="91.5vh" padding="10px">
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>

    </div>
  )
}

export default ChatsPage