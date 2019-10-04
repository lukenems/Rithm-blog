import { connect } from "react-redux";
import Post from "../components/Post";
import { deletePost, editPost, addComment, deleteComment } from "../actions";
import { fetchPostFromApi } from '../actionCreators';

function mapStateToProps(state, ownProps) {
  console.log("HOW ABOUT THIS GUY", state)

  // let post = state.posts[props.match.params.id]
  // .filter(post => (
  //   post.id === props.match.params.id
  // ))
  return {
    posts: state.posts,
    id: ownProps.match.params.id
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deletePost, editPost, addComment, deleteComment, fetchPostFromApi}
);

export default connectedComponent(Post);