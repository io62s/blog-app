import React from "react";
import Post from "./Post";
import AppMessage from "./AppMessage";

import { MainSection } from "../Styles/BlogPostsStyles";

function BlogPosts() {
  return (
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
        <Post />
      </div>
    </MainSection>
  );
}

export default BlogPosts;
