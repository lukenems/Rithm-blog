import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes.js";

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);
  
  switch (action.type) {
    case ADD_POST:
      const postId = action.payload.id;
      return { posts: {
        ...state.posts, [postId]: action.payload }
      }

    // case EDIT_POST:
    //   return { posts: {
    //   ...state.posts.map((post) => {
    //     if (post.id === id) {
    //       return editedPost;
    //     }
    //     return post;
    //   })
    //    };

    case DELETE_POST:
      let stateCopy = { ...state }
      delete stateCopy.posts[action.payload.id];
      return stateCopy;

    case ADD_COMMENT:
      return { ...state, count: state.count - 1 };

    case DELETE_COMMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
// end

export default rootReducer;
