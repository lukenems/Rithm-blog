import { connect } from "react-redux";
import { addPost } from "../actions";
import PostForm from "../components/PostForm";
import { addPostToApi } from '../actionCreators';

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost, addPostToApi }
);

export default connectedComponent(PostForm);