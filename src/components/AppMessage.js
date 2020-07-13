import React from "react";
import { MsgContainer } from "../Styles/AppMessageStyles";

function AppMessage() {
  return (
    <MsgContainer>
      <h1>My Blog</h1>
      <div className="app-msg">App Messages</div>
      <button>Add Post</button>
    </MsgContainer>
  );
}

export default AppMessage;
