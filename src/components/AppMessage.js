import React, { useContext } from "react";
import PostContext from "../context/postContext";
import { MsgContainer } from "../Styles/AppMessageStyles";

function AppMessage() {
  const postContext = useContext(PostContext);
  const { dispatch, toggleCreatePostFormModal, msg } = postContext;

  const handleToggleModal = () => {
    dispatch(toggleCreatePostFormModal());
  };

  return (
    <MsgContainer>
      <h1>My Blog</h1>
      {msg ? <div className="app-msg">{msg}</div> : null}
      <button onClick={handleToggleModal}>Add Post</button>
    </MsgContainer>
  );
}

export default AppMessage;
