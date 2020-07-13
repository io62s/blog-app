import React, { useState, useEffect, useContext } from "react";
import PostContext from "../context/postContext";
import { GrClose } from "react-icons/gr";
import {
  ModalContainer,
  FormContainer,
  FormWrapper,
} from "../Styles/PostFormStyles";

const initialFormState = {
  title: "",
  text: "",
};

function PostForm() {
  const postContext = useContext(PostContext);
  const {
    dispatch,
    getPosts,
    addPost,
    editPost,
    postToEdit,
    toggleCreatePostFormModal,
    clearPostToEdit,
    clearAppMessage,
    isLoading,
  } = postContext;

  const [newPost, setNewPost] = useState(initialFormState);

  const handleToggleModal = () => {
    dispatch(toggleCreatePostFormModal());
    dispatch(clearPostToEdit());
  };

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postToEdit === null) {
      addPost(newPost);
    } else {
      editPost(newPost);
    }
    setNewPost(initialFormState);
    handleToggleModal();
    getPosts();
    if (!isLoading) {
      setTimeout(() => {
        dispatch(clearAppMessage());
      }, 4000);
    }
  };

  useEffect(() => {
    if (postToEdit !== null) {
      setNewPost(postToEdit);
    } else {
      setNewPost(initialFormState);
    }
  }, [postToEdit]);

  return (
    <ModalContainer>
      <FormContainer>
        <div className="form-header">
          <h3>Add / Edit Blog Post</h3>
          <GrClose className="close-modal" onClick={handleToggleModal} />
        </div>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">
              Title <span>*</span>
            </label>
            <input
              type="text"
              className="post-title"
              name="title"
              placeholder="Title of the post"
              value={newPost.title}
              onChange={handleChange}
              required
            />
            <label htmlFor="text">
              Text <span>*</span>
            </label>
            <textarea
              className="post-body"
              name="text"
              placeholder="Text of the post"
              value={newPost.text}
              onChange={handleChange}
              required
            />
            <div className="buttons">
              <button type="submit">Post</button>
              <button onClick={handleToggleModal}>Cancel</button>
            </div>
          </form>
        </FormWrapper>
      </FormContainer>
    </ModalContainer>
  );
}

export default PostForm;
