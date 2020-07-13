import { GET_POSTS } from "./types";

const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export { getPosts };
