import React, { useReducer } from "react";
import postReducer from "./postReducer";
import PostContext from "./postContext";

import {
  getPosts,
  toggleCreatePostFormModal,
  addPost,
  deletePost,
} from "./postActions";

function PostState(props) {
  const initialState = {
    posts: [
      {
        id: 1,
        title: "Post One",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem. Sed cras ornare arcu dui vivamus arcu.",
      },
      {
        id: 2,
        title: "Post Two",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra mauris in aliquam sem. Sed cras ornare arcu dui vivamus arcu.",
      },
    ],
    isCreatingPost: false,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        isCreatingPost: state.isCreatingPost,
        getPosts,
        addPost,
        deletePost,
        toggleCreatePostFormModal,
        dispatch,
      }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostState;
