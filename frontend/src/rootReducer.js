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
  switch (action.type) {
    case ADD_POST:
      const posts = { ...state.posts };
      posts[action.payload.id] = action.payload;
      posts[action.payload.id].comments = [];
      return {
        titles: state.titles,
        posts
      };

    case EDIT_POST:
      const updatePosts = { ...state.posts };
      const { title, description, body } = action.payload;

      updatePosts[action.payload.id] = {
        ...updatePosts[action.payload.id],
        title,
        description,
        body
      };
      return {
        titles: state.titles,
        posts: updatePosts
      };

    case DELETE_POST:
      const postDeleted = { ...state.posts };
      delete postDeleted[action.payload.id];

      const updatedTitles = state.titles.filter(
        title => action.payload.id !== title.id
      );
      return {
        titles: updatedTitles,
        posts: postDeleted
      };

    case ADD_COMMENT:
      const postAddedComment = { ...state.posts };
      const { postId, comment } = action.payload;

      postAddedComment[postId].comments = [
        ...postAddedComment[postId].comments,
        comment
      ];
      return {
        titles: state.titles,
        posts: postAddedComment
      };

    case DELETE_COMMENT:
      const commentsOnPost = state.posts[action.payload.postId].comments;
      const removedComment = commentsOnPost.filter(
        comment => comment.id != action.payload.commentId
      );
      const statePosts = { ...state.posts };

      statePosts[action.payload.postId].comments = [...removedComment];
      return {
        titles: state.titles,
        posts: statePosts
      };

    case FETCH_POST:
      let savedPosts = { ...state.posts };
      savedPosts[action.payload.id] = action.payload;
      return {
        titles: state.titles,
        posts: savedPosts
      };

    case FETCH_POSTS:
      return {
        titles: action.payload,
        posts: state.posts
      };

    default:
      return state;
  }
}
// end

export default rootReducer;
