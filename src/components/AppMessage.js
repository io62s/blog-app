import React, { useContext } from "react";
import PostContext from "../context/postContext";
import { MsgContainer } from "../Styles/AppMessageStyles";

function AppMessage() {
  const postContext = useContext(PostContext);
  const { dispatch, toggleCreatePostFormModal } = postContext;

  const handleToggleModal = () => {
    dispatch(toggleCreatePostFormModal());
  };

  return (
    <MsgContainer>
      <h1>My Blog</h1>
      <div className="app-msg">App Messages</div>
      <button onClick={handleToggleModal}>Add Post</button>
    </MsgContainer>
  );
}

export default AppMessage;
