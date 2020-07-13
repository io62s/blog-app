import React from "react";
import { Route, Switch } from "react-router-dom";
import PostState from "../context/PostState";
import Nav from "./Nav";
import BlogPosts from "./BlogPosts";
import Profile from "./Profile";

import { Container } from "../Styles/AppStyles";
import GlobalStyle from "../Styles/GlobalStyle";

function App() {
  return (
    <PostState>
      <Container>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/">
            <BlogPosts />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Container>
    </PostState>
  );
}

export default App;
