import React, { useEffect, useContext } from "react";
import PostContext from "../context/postContext";
import Post from "./Post";
import AppMessage from "./AppMessage";
import PostForm from "./PostForm";

import { MainSection } from "../Styles/BlogPostsStyles";

function BlogPosts() {
  const postContext = useContext(PostContext);
  const { getPosts, posts, isCreatingPost, titleFilter } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(titleFilter.toLowerCase())
  );

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
          {posts.length !== 0 ? (
            filteredPosts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <h1>Add New Post</h1>
          )}
        </div>
      </MainSection>
    </>
  );
}

export default BlogPosts;
