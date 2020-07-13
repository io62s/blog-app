import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_FILTER,
  TOGGLE_MODAL,
  SET_UPDATE,
  CLEAR_UPDATE,
  CLEAR_MESSAGE,
} from "./types";

const postReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isLoading: false,
        msg: `"${action.payload.title}" Post Added`,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? Object.assign(post, action.payload)
            : post
        ),
        isLoading: false,
        msg: `"${action.payload.title}" Post Updated`,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
        isLoading: false,
        msg: `"${action.payload.title}" Post Deleted`,
      };
    case SET_FILTER:
      return {
        ...state,
        titleFilter: action.payload,
      };
    case SET_UPDATE:
      return {
        ...state,
        postToEdit: action.payload,
      };
    case CLEAR_UPDATE:
      return {
        ...state,
        postToEdit: null,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        msg: "",
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
