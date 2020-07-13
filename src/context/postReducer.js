import { GET_POSTS, ADD_POST, DELETE_POST, TOGGLE_MODAL } from "./types";

const postReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: state.posts,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isCreatingPost: !state.isCreatingPost,
      };

    default:
      return state;
  }
};

export default postReducer;
