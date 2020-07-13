import React, { useEffect, useContext, useCallback } from "react";
import PostContext from "../context/postContext";
import Post from "./Post";
import AppMessage from "./AppMessage";
import PostForm from "./PostForm";

import { MainSection } from "../Styles/BlogPostsStyles";

function BlogPosts() {
  const postContext = useContext(PostContext);
  const { dispatch, getPosts, posts, isCreatingPost } = postContext;

  const handleGetPosts = useCallback(() => {
    dispatch(getPosts());
  }, [dispatch, getPosts]);

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  return (
    <>
      {isCreatingPost ? <PostForm /> : null}
      <MainSection>
        <AppMessage />
        <aside>
          <h3>Blog Categories</h3>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </aside>
        <div className="post-wrapper">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </MainSection>
    </>
  );
}

export default BlogPosts;
