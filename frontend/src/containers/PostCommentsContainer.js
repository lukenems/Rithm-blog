import { connect } from "react-redux";
import { addComment, deleteComment } from "../actions";
import { addCommentToPostAtApi } from '../actionCreators';
import PostComments from "../components/PostComments";

function mapStateToProps(state, ownProps) {

  return {
    posts: state.posts,
    postId: ownProps.props.id
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addComment, deleteComment, addCommentToPostAtApi }
);

export default connectedComponent(PostComments);