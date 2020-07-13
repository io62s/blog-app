import React, { useReducer } from "react";
import postReducer from "./postReducer";
import PostContext from "./postContext";
import axios from "axios";
import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  TOGGLE_MODAL,
  SET_FILTER,
  SET_UPDATE,
  CLEAR_UPDATE,
  CLEAR_MESSAGE,
} from "./types";

function PostState(props) {
  const initialState = {
    posts: [],
    isCreatingPost: false,
    titleFilter: "",
    postToEdit: null,
    msg: "",
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const getPosts = async () => {
    try {
      const res = axios.get(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts"
      );
      const data = await res;
      const posts = await data.data.resultData;
      dispatch({
        type: GET_POSTS,
        payload: posts,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = async (post) => {
    try {
      const res = axios.post(
        "https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts",
        post,
        { headers: { "Content-Type": "application/json" } }
      );
      const createdPost = await res;
      const newPost = await createdPost.data;
      const postToAdd = {
        ...newPost,
        categoryId: Math.ceil(Math.random() * Math.floor(3)),
      };
      dispatch({
        type: ADD_POST,
        payload: postToAdd,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (post) => {
    try {
      const res = axios.put(
        `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${post.id}`,
        post,
        { headers: { "Content-Type": "application/json" } }
      );

      const updatedPost = await res;

      dispatch({
        type: UPDATE_POST,
        payload: updatedPost,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (post) => {
    try {
      await axios.delete(
        `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${post.id}`
      );

      dispatch({
        type: DELETE_POST,
        payload: post,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setPostToEdit = (post) => {
    return {
      type: SET_UPDATE,
      payload: post,
    };
  };

  const clearPostToEdit = () => {
    return {
      type: CLEAR_UPDATE,
    };
  };

  const setTitleFilter = (title) => {
    return {
      type: SET_FILTER,
      payload: title,
    };
  };

  const toggleCreatePostFormModal = () => {
    return {
      type: TOGGLE_MODAL,
    };
  };

  const clearAppMessage = () => {
    return {
      type: CLEAR_MESSAGE,
    };
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        titleFilter: state.titleFilter,
        isCreatingPost: state.isCreatingPost,
        postToEdit: state.postToEdit,
        msg: state.msg,
        getPosts,
        addPost,
        editPost,
        deletePost,
        setTitleFilter,
        setPostToEdit,
        clearPostToEdit,
        toggleCreatePostFormModal,
        clearAppMessage,
        dispatch,
      }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostState;
