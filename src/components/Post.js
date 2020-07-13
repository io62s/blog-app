import React from "react";
import { PostContainer } from "../Styles/PostStyles";

function Post() {
  return (
    <PostContainer>
      <div className="post-header">
        <div className="title-wrapper">
          <img src="https://picsum.photos/80" alt="avatar" />
          <div>
            <h3>Post Title</h3>
            <p>Created at</p>
          </div>
        </div>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="post-body">
        <p>Post Text</p>
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
