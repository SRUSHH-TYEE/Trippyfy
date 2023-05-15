import React from "react";
import { ChatState } from "../../Context/ChatProvider";
import SideDrawer from "../../components/LoggedIn/SideDrawer";
import MyChats from "../../components/LoggedIn/MyChats";
import ChatBox from "../../components/LoggedIn/ChatBox";
import { Box } from "@chakra-ui/react";
import ChatBg from "../../components/LoggedIn/ChatBg";

const ChatsPage = () => {
  const  user  = {};
  return (
    <div style={{ width: "100%" }}>
      <ChatBg />
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        <div className="d-flex justify-content-between" style={{ width:"100%"}}>
          <div style={{ backgroundColor:"white", margin:"0.8rem", marginLeft:"1rem",width:"28%",borderRadius:"1.1em" }}>
            {user && <MyChats />}
          </div>
          <div style={{ backgroundColor:"white", margin:"0.8rem",width:"69%", borderRadius:"1.1em" }}>
            {user && <ChatBox />}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ChatsPage;
