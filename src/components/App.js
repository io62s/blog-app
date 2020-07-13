import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import BlogPosts from "./BlogPosts";
import Profile from "./Profile";

import { Container } from "../Styles/AppStyles";
import GlobalStyle from "../Styles/GlobalStyle";

function App() {
  return (
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
  );
}

export default App;
