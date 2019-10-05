import { connect } from "react-redux";
import Post from "../components/Post";
import { deletePost, editPost, addComment, deleteComment } from "../actions";
import { fetchPostFromApi, editPostAtApi, deletePostAtApi } from '../actionCreators';

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    id: ownProps.match.params.id
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deletePost, editPost, addComment, deleteComment, fetchPostFromApi, editPostAtApi, deletePostAtApi }
);

export default connectedComponent(Post);