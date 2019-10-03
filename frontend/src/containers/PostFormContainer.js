import { connect } from "react-redux";
import { addPost } from "../actions";
import PostForm from "../components/PostForm";

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost }
);

export default connectedComponent(PostForm);