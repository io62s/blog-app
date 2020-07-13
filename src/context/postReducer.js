import { GET_POSTS } from "./types";

const postReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: state.posts,
      };

    default:
      return state;
  }
};

export default postReducer;
