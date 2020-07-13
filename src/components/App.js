import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <BlogPosts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
