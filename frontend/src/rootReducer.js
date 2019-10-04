import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  FETCH_POST,
  FETCH_POSTS
} from "./actionTypes.js";

const INITIAL_STATE = { posts: {}, titles: [] };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD_POST:
      let posts = { ...state.posts }
      posts[action.payload.id] = action.payload;
      posts[action.payload.id].comments = [];
      return {
        titles: state.titles,
        posts
      }

    case EDIT_POST:
      return {
        ...state, titles: state.titles.map(post => {
          if (post.id === action.payload.id) {
            return action.payload
          }
        })
      }

    case DELETE_POST:
      return {
        ...state, titles:
          state.titles.filter(post => (
            post.id !== action.payload
          ))
      }

    case ADD_COMMENT:
      console.log("action in addcomment reducer", action)
      return {
        ...state,
        titles: state.titles.map(post => (
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        ))
      };

    // case DELETE_COMMENT:
    // return {
    //   ...state,
    //   titles: state.titles.map(post => (
    //     post.id === action.payload.postId
    //       ? { ...post, comments: [...post.comments, action.payload.comment] }
    //       : post
    //   ))
    // };

    case FETCH_POST:
      let savedPosts = { ...state.posts };
      console.log("savedPosts --->", savedPosts)
      savedPosts[action.payload.id] = action.payload;
      console.log("savedPosts after we add another--->", savedPosts)
      return {
        titles: state.titles,
        posts: savedPosts
      }

    case FETCH_POSTS:
      return {
        titles: action.payload,
        posts: state.posts
      }



    default:
      return state;
  }
}
// end

export default rootReducer;
