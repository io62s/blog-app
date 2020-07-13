import React, { useContext } from "react";
import PostContext from "../context/postContext";
import moment from "moment";
import { PostContainer } from "../Styles/PostStyles";

function Post({ post }) {
  const postContext = useContext(PostContext);
  const {
    dispatch,
    deletePost,
    setPostToEdit,
    clearAppMessage,
    toggleCreatePostFormModal,
    isLoading,
  } = postContext;
  const { title, text, createdAt } = post;

  const date = moment(createdAt).format(`DD.MM.YYYY`);
  const time = moment(createdAt).format(`HH:mm`);

  const handleDeletePost = () => {
    deletePost(post);
    if (!isLoading) {
      setTimeout(() => {
        dispatch(clearAppMessage());
      }, 4000);
    }
  };

  const handlePostToEdit = () => {
    dispatch(setPostToEdit(post));
    dispatch(toggleCreatePostFormModal());
  };
  return (
    <PostContainer>
      <div className="post-header">
        <div className="title-wrapper">
          <img src="https://picsum.photos/80" alt="avatar" />
          <div>
            <h3>{title}</h3>
            <p>Posted date: {`${date} at ${time} by John Doe ${post.id}`}</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handlePostToEdit}>Edit</button>
          <button onClick={handleDeletePost}>Delete</button>
        </div>
      </div>
      <div className="post-body">
        <p>{text}</p>
      </div>
      <div className="images">
        <img src="https://picsum.photos/100" alt="blog" />
        <img src="https://picsum.photos/100" alt="blog" />
        <img src="https://picsum.photos/100" alt="blog" />
      </div>
    </PostContainer>
  );
}

export default Post;
