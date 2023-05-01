import React from "react";

const ChatBox = () => {
  return (
    <div>
      {/* Show this when user has not selected any chat */}
      <div
        className=""
        style={{
          fontSize: "23px",
          display: "flex",
          justifyContent: "center",
          marginTop:"25%"
        }}
      >
        <div>
          Click on user to start a chat
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
