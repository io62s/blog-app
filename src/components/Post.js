import React from "react";
import { PostContainer } from "../Styles/PostStyles";

function Post({ post }) {
  const { title, text } = post;

  return (
    <PostContainer>
      <div className="post-header">
        <div className="title-wrapper">
          <img src="https://picsum.photos/80" alt="avatar" />
          <div>
            <h3>{title}</h3>
            <p>Created at</p>
          </div>
        </div>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
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
