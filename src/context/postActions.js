import { GET_POSTS, ADD_POST, DELETE_POST, TOGGLE_MODAL } from "./types";

const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};
const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
const deletePost = (post) => {
  return {
    type: DELETE_POST,
    payload: post,
  };
};

const toggleCreatePostFormModal = () => {
  return {
    type: TOGGLE_MODAL,
  };
};

export { getPosts, addPost, deletePost, toggleCreatePostFormModal };
