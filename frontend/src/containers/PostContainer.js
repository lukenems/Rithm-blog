import { connect } from "react-redux";
import Post from "../components/Post";
import { deletePost, editPost, addComment, deleteComment } from "../actions";

function mapStateToProps(state, props) {

  let post = state.titles.filter(post => (
    post.id === props.match.params.id
  ))
  return {
    post
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deletePost, editPost, addComment, deleteComment}
);

export default connectedComponent(Post);